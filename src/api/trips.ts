import type { TripState } from 'types/trip.type';
import { trip_1, trip_2 } from 'utils/mockData.ts';

type FetchTripsOptions = {
    signal?: AbortSignal;
    minDelay?: number;
    maxDelay?: number;
};

const delay = (ms: number, signal?: AbortSignal) =>
    new Promise<void>((resolve, reject) => {
        const id = setTimeout(resolve, ms);
        if (signal) {
            const onAbort = () => {
                clearTimeout(id);
                reject(new DOMException('Aborted', 'AbortError'));
            };
            if (signal.aborted) onAbort();
            signal.addEventListener('abort', onAbort, { once: true });
        }
    });

export async function fetchTrips(
    opts: FetchTripsOptions = {}
): Promise<TripState[]> {
    const { signal, minDelay = 300, maxDelay = 900 } = opts;

    const ms = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    await delay(ms, signal);

    // Return a cloned payload to avoid shared references in ui
    const data: TripState[] = [trip_1, trip_2];
    return structuredClone
        ? structuredClone(data)
        : JSON.parse(JSON.stringify(data));
}
