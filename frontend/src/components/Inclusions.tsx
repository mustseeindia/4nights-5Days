import { Check, X } from 'lucide-react';

const inclusions = [
    '5 Nights Accommodation',
    'Daily Breakfast',
    '1 Night Private Houseboat with Meals',
    'Private AC Cab',
    'Sightseeing as per plan',
    'All Taxes Included',
];

const exclusions = [
    'Airfare / Train Tickets',
    'Personal Expenses',
    'Adventure Activity Charges',
    'Meals Not Mentioned',
    'Early Check-in / Late Check-out Charges',
];

export default function Inclusions() {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: 'white' }}
            aria-label="Package inclusions and exclusions"
        >
            <div className="max-w-5xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        What's Included
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Package Inclusions &amp; Exclusions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inclusions */}
                    <div
                        className="rounded-2xl p-6 border"
                        style={{ backgroundColor: 'oklch(0.97 0.02 155)', borderColor: 'oklch(0.88 0.04 155)' }}
                    >
                        <h3
                            className="font-display text-xl font-bold mb-5 flex items-center gap-2"
                            style={{ color: 'oklch(0.24 0.1 155)' }}
                        >
                            <span
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'oklch(0.32 0.12 155)' }}
                            >
                                <Check className="w-4 h-4 text-white" />
                            </span>
                            Inclusions
                        </h3>
                        <ul className="space-y-3">
                            {inclusions.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-body text-sm text-gray-700">
                                    <span
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: 'oklch(0.32 0.12 155)' }}
                                    >
                                        <Check className="w-3 h-3 text-white" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclusions */}
                    <div
                        className="rounded-2xl p-6 border"
                        style={{ backgroundColor: 'oklch(0.98 0.01 20)', borderColor: 'oklch(0.9 0.02 20)' }}
                    >
                        <h3
                            className="font-display text-xl font-bold mb-5 flex items-center gap-2"
                            style={{ color: 'oklch(0.45 0.12 25)' }}
                        >
                            <span
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'oklch(0.55 0.15 25)' }}
                            >
                                <X className="w-4 h-4 text-white" />
                            </span>
                            Exclusions
                        </h3>
                        <ul className="space-y-3">
                            {exclusions.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-body text-sm text-gray-500">
                                    <span
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: 'oklch(0.88 0.03 20)' }}
                                    >
                                        <X className="w-3 h-3" style={{ color: 'oklch(0.55 0.15 25)' }} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
