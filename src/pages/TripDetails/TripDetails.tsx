import { useEffect } from 'react';

// CORE COMPONENTS
import TripGallery from 'components/Gallery';
import PreferencesList from 'components/PreferencesList';

// STORE
import { useTripStore } from 'store/trip.store';

// PARTS
import Aside from './parts/Aside.tsx';
import TripCaption from './parts/Caption.tsx';
import TripInfoPanel from './parts/InfoPanel.tsx';

// STYLES
import {
    ContentRow,
    SkeletonBox,
    SkeletonRow,
    SkeletoneRoot,
} from './styles.ts';

const TripDetails = () => {
    const { loadTrips, currentTrip: trip, loading } = useTripStore();

    useEffect(() => {
        loadTrips();
    }, [loadTrips]);

    if (loading || !trip) {
        return (
            <SkeletoneRoot>
                <SkeletonBox h={420} r="24px" />
                <SkeletonRow>
                    <SkeletonBox h={240} r="16px" w="70%" />
                    <SkeletonBox h={180} r="16px" w="30%" />
                </SkeletonRow>
            </SkeletoneRoot>
        );
    }

    return (
        <>
            <TripCaption />

            <TripGallery />

            <TripInfoPanel />

            <ContentRow>
                <PreferencesList />
                <Aside />
            </ContentRow>
        </>
    );
};

export default TripDetails;
