import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Form } from '../backend';

export function useSubmitForm() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData: {
            name: string;
            phone: string;
            travelMonth: string;
            numberOfAdults: number;
            packageInterest: string;
        }) => {
            if (!actor) throw new Error('Actor not initialized');

            const form: Form = {
                name: formData.name,
                phone: formData.phone,
                travelMonth: formData.travelMonth,
                numberOfAdults: BigInt(formData.numberOfAdults),
                packageInterest: formData.packageInterest,
                timestamp: BigInt(Date.now()),
            };

            await actor.submitForm(form);

            // Track form submission
            console.log('[Analytics] Form submitted:', {
                packageInterest: formData.packageInterest,
                travelMonth: formData.travelMonth,
                timestamp: new Date().toISOString(),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['forms'] });
        },
    });
}
