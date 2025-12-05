import React, { useCallback, useMemo, useState } from 'react';

// TYPES
import type { TripComponent, TripComponentKey } from 'types/trip.type';

// CORE COMPONENTS
import Button from 'components/Button';
import Card from 'components/Card';

// LOCAL COMPONENTS
import EditModal from '../EditModal';

// UTILS
import { currency } from 'utils/functions.ts';

// STYLES
import { CardsGrid, Price } from './styles.ts';

// STORE
import { useTripStore } from 'store/trip.store.ts';

const PreferencesList: React.FC = () => {
    const [queryKey, setEditingKey] = useState<TripComponentKey | null>(null);

    const { currentTrip: trip, applyEdit } = useTripStore();
    const components = trip?.components;

    const currentEditing = useMemo(
        () =>
            queryKey
                ? trip?.components.find(c => c.key === queryKey)
                : undefined,
        [trip, queryKey]
    );

    const onApplyEdit = useCallback(
        (choice: string) => {
            if (!queryKey || !choice) return;

            applyEdit(queryKey, choice);
        },
        [queryKey, applyEdit]
    );

    return (
        <>
            <CardsGrid aria-label="Trip components">
                {components && components?.length > 0
                    ? components?.map((item: TripComponent) => (
                          <Card key={item.key} title={item.description}>
                              <Card.Body
                                  title={item.description}
                                  label={item.label}
                              />
                              <Card.Footer>
                                  <Price>+{currency(item.price)}</Price>
                                  <Button
                                      variant="subtle"
                                      onClick={() => setEditingKey(item.key)}
                                      aria-label={`Edit ${item.label}`}
                                  >
                                      Edit
                                  </Button>
                              </Card.Footer>
                          </Card>
                      ))
                    : null}
            </CardsGrid>

            <EditModal
                open={!!queryKey}
                title={`Edit ${currentEditing?.label ?? ''}`}
                queryKey={queryKey}
                value={currentEditing?.description ?? ''}
                onClose={() => setEditingKey(null)}
                onApply={onApplyEdit}
            />
        </>
    );
};

export default PreferencesList;
