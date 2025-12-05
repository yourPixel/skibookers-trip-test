import { create } from 'zustand';
import { fetchTrips } from 'api/trips';
import type { TripComponentKey, TripState } from 'types/trip.type';

type TripStore = {
    trips: TripState[];
    loading: boolean;
    error?: string;

    // selectors
    currentTrip: TripState | null;
    total: number;

    // actions
    loadTrips: () => Promise<void>;
    setCurrentTrip: (index: number) => void;
    applyEdit: (key: TripComponentKey, choice: string) => void;
};

export const useTripStore = create<TripStore>((set, get) => ({
    trips: [],
    loading: false,
    error: undefined,
    currentTrip: null,
    total: 0,

    loadTrips: async () => {
        set({ loading: true, error: undefined });

        try {
            const trips = await fetchTrips();
            const total = trips.length > 0 ? computeTotal(trips[0]) : 0;
            set({
                trips,
                currentTrip: trips.length > 0 ? trips[0] : null,
                total,
                loading: false,
            });
        } catch (e: any) {
            set({
                error: e?.message ?? 'Failed to load trips',
                loading: false,
            });
        }
    },

    setCurrentTrip: (index: number) => {
        const trips = get().trips;
        if (!trips[index]) return;
        const trip = trips[index];
        set({
            currentTrip: trip,
            total: computeTotal(trip),
        });
    },

    applyEdit: (key, choice) => {
        const { currentTrip, trips } = get();

        if (!currentTrip) return;

        const currentIndex = trips.findIndex(tr => tr.id === currentTrip.id);

        const updated: TripState = {
            ...currentTrip,
            ...(key === 'resort'
                ? {
                      resortName: choice.replace(/ \(.+\)$/, ''),
                  }
                : {}),
            components: currentTrip.components.map(c => {
                if (c.key !== key) return c;
                return {
                    ...c,
                    description: choice,
                };
            }),
        };

        const newTrips = trips.slice();
        newTrips[currentIndex] = updated;

        set({
            trips: newTrips,
            currentTrip: updated,
            total: computeTotal(updated),
        });
    },
}));

const computeTotal = (trip: TripState): number => {
    return trip.components.reduce((sum, c) => {
        const v = Number.isFinite(c.price) ? Math.max(0, c.price) : 0;
        return sum + v;
    }, 0);
};
