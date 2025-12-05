export type TripComponentKey =
    | 'resort'
    | 'hotel'
    | 'room'
    | 'skipass'
    | 'transfer'
    | 'flight'
    | 'insurance'
    | 'addons';

export type TripComponent = {
    key: TripComponentKey;
    label: string;
    description: string;
    price: number;
    editable: boolean;
};

export type TripState = {
    id: string | number;
    resortName: string;
    resortTagline: string;
    resortRegion: string;
    resortMeta: string;
    images: string[];
    components: TripComponent[];
    recommendationSummary: string;
};
