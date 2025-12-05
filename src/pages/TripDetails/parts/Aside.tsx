// STORE
import { useTripStore } from 'store/trip.store.ts';

// CORE COMPONENTS
import Card from 'components/Card';
import Button from 'components/Button';
import Badge from 'components/Badge';

// UTILS
import { currency } from 'utils/functions.ts';

// STYLES
import { Muted, PurpleButton, StickyAsideCard, Total } from '../styles.ts';

const Aside = () => {
    const { trips, setCurrentTrip, currentTrip: trip, total } = useTripStore();

    return (
        <StickyAsideCard>
            <Card title="Trip total">
                <Card.Body title="Estimated total">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            marginBottom: 24,
                        }}
                    >
                        <Muted>Taxes and fees included</Muted>
                        <Total>{currency(total)}</Total>
                    </div>

                    <Button variant="primary" size="lg">
                        Continue to Checkout
                    </Button>

                    <Badge size="lg">Free cancellation until 20 December</Badge>
                </Card.Body>
            </Card>

            <Card title="AI suggestion">
                <Card.Body
                    title="Smart upgrade suggestion"
                    description={
                        <>
                            AI recommends upgrading your room for {currency(50)}{' '}
                            extra to improve comfort and views.
                        </>
                    }
                >
                    <PurpleButton size="lg" leftIcon={<span>✨</span>}>
                        AI Generate suggestions +{currency(50)}
                    </PurpleButton>
                </Card.Body>
            </Card>

            <Card title="Recommended for you">
                <Card.Body
                    title="Recommended for you"
                    description={trip?.recommendationSummary}
                >
                    <ul
                        className="reco-list"
                        style={{ margin: '10px 0 0', paddingLeft: 16 }}
                    >
                        <li>Optimized for intermediate pistes</li>
                        <li>Top-rated apres-ski nearby</li>
                        <li>Walkable access to lifts (≤ 5 min)</li>
                    </ul>
                </Card.Body>
                <Card.Footer
                    style={{
                        justifyContent: 'flex-start',
                    }}
                >
                    {trips.map((t, idx) => {
                        const variant =
                            t.resortName === trip?.resortName
                                ? 'outline'
                                : 'subtle';

                        return (
                            <Button
                                key={`${t.resortName}-${idx}`}
                                variant={variant}
                                onClick={() => setCurrentTrip(idx)}
                            >
                                {t.resortName}
                            </Button>
                        );
                    })}
                </Card.Footer>
            </Card>
        </StickyAsideCard>
    );
};

export default Aside;
