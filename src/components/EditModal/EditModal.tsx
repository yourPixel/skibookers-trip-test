import { useState } from 'react';

// CORE COMPONENTS
import Button from 'components/Button';

// UTILS
import { currency } from 'utils/functions.ts';

// STYLES
import {
    Backdrop,
    Body,
    Field,
    FieldLabel,
    Header,
    Select,
    Sheet,
    Title,
    Footer,
    AiTip,
} from './styles.ts';

// TYPES
import type { TripComponentKey } from 'types/trip.type.ts';

type EditModalProps = {
    open: boolean;
    title: string;
    queryKey: string | null;
    value: string;
    onClose: () => void;
    onApply: (choice: string) => void;
};

// MODAL OPTIONS
const OPTIONS: Partial<Record<TripComponentKey, string[]>> = {
    resort: [
        'Alpine Heights',
        'Glacier Peak',
        'Snowy Ridge',
        'Edelweiss Valley',
    ],
    hotel: [
        '4★ Chalet near lifts',
        '3★ Lodge in center',
        '5★ Spa Resort',
        'Budget Hostel',
    ],
    room: [
        'Double room + breakfast',
        'Suite + lounge access',
        'Twin room',
        'Apartment (self-catered)',
    ],
    skipass: [
        '2 days • Standard',
        '3 days • Premium',
        '5 days • Full area',
        'Night skiing add-on',
    ],
    transfer: ['Shuttle', 'Private Van', 'Luxury Sedan', 'Train'],
    flight: ['Add round-trip', 'Change airline', 'Remove flight'],
    insurance: ['Basic', 'Standard', 'Premium', 'Remove insurance'],
    addons: [
        'Ski lessons',
        'Spa access',
        'Snowmobile tour',
        'Nightlife bundle',
        'Equipment rental',
    ],
};

function EditModal({
    open,
    title,
    queryKey,
    value,
    onClose,
    onApply,
}: EditModalProps) {
    const [choice, setChoice] = useState<string>(value);

    const options = queryKey
        ? (OPTIONS[queryKey as TripComponentKey] ?? [])
        : [];

    if (!open) return null;

    return (
        <Backdrop
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onMouseDown={onClose}
        >
            <Sheet onMouseDown={e => e.stopPropagation()}>
                <Header>
                    <Title>{title}</Title>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ✕
                    </Button>
                </Header>

                <Body>
                    <Field className="stack">
                        <FieldLabel>Option</FieldLabel>
                        <Select
                            value={choice}
                            onChange={e => setChoice(e.target.value)}
                        >
                            {[
                                value,
                                ...options.filter((o: string) => o !== value),
                            ].map(opt => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </Select>
                    </Field>

                    <AiTip>
                        AI suggests upgrading for {currency(50)} extra for
                        better value this weekend.
                    </AiTip>
                </Body>

                <Footer>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            onApply(choice);
                            onClose();
                        }}
                    >
                        Apply
                    </Button>
                </Footer>
            </Sheet>
        </Backdrop>
    );
}

export default EditModal;
