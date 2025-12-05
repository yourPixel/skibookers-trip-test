import { useState } from 'react';
import { Share } from 'lucide-react';

// STORE
import { useTripStore } from 'store/trip.store.ts';

// CORE COMPONENTS
import Button from 'components/Button';

// STYLES
import { HeaderCard, HeaderTitle } from '../styles.ts';

const Caption = () => {
    const { currentTrip: trip } = useTripStore();
    const [saved, setSaved] = useState(false);

    const share = async () => {
        const title = trip?.resortName
            ? `${trip.resortName} — Ski Trip`
            : 'Ski Trip';
        const url = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({ title, url });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(url);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <HeaderCard aria-label="Trip header">
            <HeaderTitle>
                <div className="title">
                    {trip?.resortName ?? 'Your Ski Trip'}
                </div>
                <div className="sub">
                    {trip?.resortRegion
                        ? `${trip.resortRegion} • ${trip.resortMeta}`
                        : 'Customize your package'}
                </div>
            </HeaderTitle>

            <div style={{ display: 'flex', gap: 8 }}>
                <Button
                    variant="subtle"
                    onClick={share}
                    leftIcon={<Share size={14} />}
                />
                <Button
                    variant="outline"
                    aria-pressed={saved}
                    onClick={() => setSaved(s => !s)}
                    leftIcon={<span>{saved ? '★' : '☆'}</span>}
                />
            </div>
        </HeaderCard>
    );
};

export default Caption;
