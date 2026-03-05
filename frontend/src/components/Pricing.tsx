import { TrendingUp, Clock } from 'lucide-react';

interface PricingProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

export default function Pricing({ onOpenLeadForm }: PricingProps) {
    return (
        <section
            className="py-16 md:py-24 bg-cream"
            aria-label="Package pricing"
        >
            <div className="max-w-3xl mx-auto px-4 text-center font-[Montserrat]">

                {/* Label */}
                <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700"
                >
                    Best Value Package
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Package Pricing
                </h2>

                <p className="text-gray-600 mb-8 text-base">
                    Transparent pricing with no hidden charges.
                </p>

                {/* Price card */}
                <div className="rounded-2xl p-8 md:p-10 mb-8 border bg-white shadow-lg">
                    <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
                        Starting From
                    </p>

                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-bold text-indigo-700">
                            ₹8,499
                        </span>

                        <span className="text-gray-700 text-lg mb-2">
                            / person
                        </span>
                    </div>

                    <p className="text-gray-600 text-sm">
                        4 Nights 5 Days | Munnar · Thekkady · Alleppey/Kumarakom Houseboat
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-left">
                        {[
                            ['5 Nights Stay', '3★ & 4★ Hotels'],
                            ['Private AC Cab', 'Full Trip'],
                            ['Houseboat Night', 'With Meals'],
                            ['Daily Breakfast', 'Included'],
                        ].map(([label, value], i) => (
                            <div key={i}>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">
                                    {label}
                                </p>
                                <p className="text-gray-900 font-semibold text-sm">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Urgency lines */}
                <div className="space-y-2 mb-8">

                    <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <TrendingUp
                            className="w-4 h-4 flex-shrink-0 text-indigo-600"
                        />
                        Prices may vary during long weekends and holiday seasons.
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <Clock
                            className="w-4 h-4 flex-shrink-0 text-indigo-600"
                        />
                        Early booking recommended for best rates.
                    </div>

                </div>

                {/* CTA */}
                <button
                    onClick={() => onOpenLeadForm('General')}
                    className="btn-gold px-10 py-4 rounded-lg text-base font-bold shadow-lg"
                >
                    Check Best Available Price →
                </button>

            </div>
        </section>
    );
}
