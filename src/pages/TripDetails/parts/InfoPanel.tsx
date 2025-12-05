import React from 'react';

// ICONS
import { MapPin, Mountain, Snowflake, Clock, Users } from 'lucide-react';

// COMPONENTS
import Badge from 'components/Badge';
import Card from 'components/Card';

// STYLES
import {
    Panel,
    Chips,
    MetaLabel,
    MetaRow,
    Quick,
    Title,
    Description,
} from './InfoPanel.styles.ts';

// STORE
import { useTripStore } from 'store/trip.store.ts';

const InfoPanel: React.FC = () => {
    const { currentTrip: trip } = useTripStore();

    if (!trip) return null;

    return (
        <Panel aria-label="Trip quick info">
            <Card>
                <Card.Body>
                    <Quick>
                        <Badge
                            variant="aqua"
                            size="sm"
                            leftIcon={<MapPin size={14} />}
                        >
                            {trip.resortRegion}
                        </Badge>
                        <Badge variant="outline" size="sm">
                            {trip.resortMeta.split('•')[0]?.trim() ||
                                'Ski Area'}
                        </Badge>
                        <Badge variant="brand" size="sm">
                            Recommended
                        </Badge>
                    </Quick>

                    <Title>{trip.resortName}</Title>

                    <Description>{trip.resortTagline}</Description>

                    <Chips>
                        <Badge
                            variant="neutral"
                            size="md"
                            leftIcon={<Snowflake size={14} />}
                        >
                            Snow quality: High
                        </Badge>
                        <Badge
                            variant="neutral"
                            size="md"
                            leftIcon={<Mountain size={14} />}
                        >
                            Terrain: Intermediate+
                        </Badge>
                        <Badge
                            variant="neutral"
                            size="md"
                            leftIcon={<Users size={14} />}
                        >
                            Perfect for friends
                        </Badge>
                    </Chips>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <MetaRow>
                        <Snowflake />
                        <MetaLabel>Lift System</MetaLabel>
                        <span>Modern high-speed lifts</span>
                    </MetaRow>
                    <MetaRow>
                        <Mountain />
                        <MetaLabel>Vertical</MetaLabel>
                        <span>Up to 1500 m</span>
                    </MetaRow>
                    <MetaRow>
                        <Clock />
                        <MetaLabel>Best time</MetaLabel>
                        <span>Dec – Mar</span>
                    </MetaRow>
                    <MetaRow>
                        <MapPin />
                        <MetaLabel>Access</MetaLabel>
                        <span>≤ 2h from nearest airport</span>
                    </MetaRow>
                </Card.Body>
            </Card>
        </Panel>
    );
};

export default InfoPanel;
