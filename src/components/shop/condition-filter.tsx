import { CheckBox } from '@components/ui/checkbox';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
const conditionFilter = [
    {
        id: '1',
        name: 'New',
    },
    {
        id: '2',
        name: 'Used',

    }
];
export const ConditionFilter = () => {
    const { t } = useTranslation('condition');
    const router = useRouter();
    const { pathname, query } = router;
    const selectedConditions = query?.color ? (query.color as string).split(',') : [];
    const [formState, setFormState] = React.useState<string[]>(selectedConditions);
    React.useEffect(() => {
        setFormState(selectedConditions);
    }, [query?.color]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        let currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        // setFormState(currentFormState);
        const { condition, ...restQuery } = query;
        router.push(
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(!!currentFormState.length
                        ? { color: currentFormState.join(',') }
                        : {}),
                },
            },
            undefined,
            { scroll: false }
        );
    }
    const items = conditionFilter;

    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                {t('Condition')}
            </h3>
            <div className="mt-2 flex flex-col space-y-4">
                {items?.map((item: any) => (
                    <CheckBox
                        key={item.id}
                        label={item.name}
                        name={item.name.toLowerCase()}
                        checked={formState.includes(item.slug)}
                        value={item.slug}
                        onChange={handleItemClick}
                    />
                ))}
            </div>
        </div>
    );
};
