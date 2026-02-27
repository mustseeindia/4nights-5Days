import { TrendingUp, Clock } from 'lucide-react';

interface PricingProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

export default function Pricing({ onOpenLeadForm }: PricingProps) {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: 'oklch(0.24 0.1 155)' }}
            aria-label="Package pricing"
        >
            <div className="max-w-3xl mx-auto px-4 text-center">
                {/* Label */}
                <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-4 font-body px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'oklch(0.32 0.12 155)', color: 'oklch(0.88 0.1 80)' }}
                >
                    Best Value Package
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    Package Pricing
                </h2>
                <p className="font-body text-white/70 mb-8 text-base">
                    Transparent pricing with no hidden charges.
                </p>

                {/* Price card */}
                <div
                    className="rounded-2xl p-8 md:p-10 mb-8 border"
                    style={{ backgroundColor: 'oklch(0.28 0.11 155)', borderColor: 'oklch(0.36 0.1 155)' }}
                >
                    <p className="font-body text-white/70 text-sm mb-2 uppercase tracking-widest">Starting From</p>
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span
                            className="font-display text-5xl md:text-6xl font-bold"
                            style={{ color: 'oklch(0.88 0.1 80)' }}
                        >
                            ₹18,999
                        </span>
                        <span className="font-body text-white/80 text-lg mb-2">/ person</span>
                    </div>
                    <p className="font-body text-white/60 text-sm">5 Nights 6 Days | Munnar · Allapey/Kumarakom Houseboat · Kovalam  </p>

                    <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                        {[
                            ['5 Nights Stay', '3★ & 4★ Hotels'],
                            ['Private AC Cab', 'Full Trip'],
                            ['Houseboat Night', 'With Meals'],
                            ['Daily Breakfast', 'Included'],
                        ].map(([label, value], i) => (
                            <div key={i}>
                                <p className="font-body text-white/50 text-xs uppercase tracking-wide">{label}</p>
                                <p className="font-body text-white font-semibold text-sm">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Urgency lines */}
                <div className="space-y-2 mb-8">
                    <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-body">
                        <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.88 0.1 80)' }} />
                        Prices may vary during long weekends and holiday seasons.
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-body">
                        <Clock className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.88 0.1 80)' }} />
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
