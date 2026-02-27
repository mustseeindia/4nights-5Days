import { MapPin } from 'lucide-react';

interface ItineraryProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

const days = [
    { day: 'Day 1', title: 'Cochin to Munnar', icon: '🌿' },
    { day: 'Day 2', title: 'Munnar Sightseeing', icon: '🍃' },
    { day: 'Day 3', title: 'Allapey/Kumarakom Houseboat', icon: '⛵' },
    { day: 'Day 4', title: 'Kovalam', icon: '🌊' },
    { day: 'Day 5', title: 'Kovalam', icon: '🌊' },
    { day: 'Day 6', title: 'Departure', icon: '✈️' },
];

export default function Itinerary({ onOpenLeadForm }: ItineraryProps) {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: 'oklch(0.98 0.012 95)' }}
            aria-label="Tour itinerary"
        >
            <div className="max-w-3xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        Your Journey
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Itinerary Overview
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        A perfectly crafted 6-day journey through Kerala's finest destinations.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative space-y-0">
                    {days.map((item, i) => (
                        <div key={i} className="flex items-stretch gap-4 group">
                            {/* Timeline line + dot */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 shadow-sm border-2 border-white z-10"
                                    style={{ backgroundColor: 'oklch(0.92 0.04 155)' }}
                                >
                                    {item.icon}
                                </div>
                                {i < days.length - 1 && (
                                    <div
                                        className="w-0.5 flex-1 my-1"
                                        style={{ backgroundColor: 'oklch(0.88 0.04 155)' }}
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div
                                className="flex-1 mb-3 rounded-xl px-5 py-4 border transition-all group-hover:shadow-card"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: 'oklch(0.88 0.015 95)',
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="text-xs font-bold font-body px-2.5 py-1 rounded-full"
                                        style={{
                                            backgroundColor: 'oklch(0.24 0.1 155)',
                                            color: 'white',
                                        }}
                                    >
                                        {item.day}
                                    </span>
                                    <span className="font-body font-semibold text-base" style={{ color: 'oklch(0.18 0.02 200)' }}>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div
                    className="mt-6 flex items-start gap-3 rounded-xl p-4 border"
                    style={{ backgroundColor: 'oklch(0.96 0.03 85)', borderColor: 'oklch(0.88 0.08 80)' }}
                >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.62 0.13 72)' }} />
                    <p className="font-body text-sm" style={{ color: 'oklch(0.35 0.05 80)' }}>
                        <strong>Flexible Itinerary:</strong> Itinerary can be customized based on your travel dates, preferences, and group size.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => onOpenLeadForm('General')}
                        className="btn-gold px-8 py-3.5 rounded-lg text-base font-bold shadow-card"
                    >
                        Customize My Trip →
                    </button>
                </div>
            </div>
        </section>
    );
}
