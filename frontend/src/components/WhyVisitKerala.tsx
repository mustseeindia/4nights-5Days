interface WhyVisitKeralaProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

const destinations = [
    {
        image: './assets/munnar-tea.dim_800x600.jpg',
        label: 'Munnar Tea Gardens',
        highlight: 'Misty hills blanketed in emerald tea estates — a photographer\'s paradise.',
    },
    {
        image: './assets/thekkady-wildlife.dim_800x600.jpg',
        label: 'Thekkady Wildlife',
        highlight: 'Periyar Tiger Reserve — spot elephants, bison & exotic birds in the wild.',
    },
    {
        image: './assets/alleppey-houseboat.dim_800x600.jpg',
        label: 'Alleppey Private Houseboat',
        highlight: 'Glide through serene backwaters on your own private houseboat with meals.',
    },
    {
        image: './assets/kovalam-beach.dim_800x600.jpg',
        label: 'Kovalam Beach Sunset',
        highlight: 'Golden sunsets, lighthouse views & the gentle rhythm of Arabian Sea waves.',
    },
];

export default function WhyVisitKerala({ onOpenLeadForm }: WhyVisitKeralaProps) {
    return (
        <section className="py-16 md:py-24 bg-cream" aria-label="Why visit Kerala">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        Discover Kerala
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Why Visit Kerala?
                    </h2>
                    <p className="font-body text-gray-500 max-w-xl mx-auto text-base">
                        "God's Own Country" — where every landscape tells a story of natural wonder and timeless beauty.
                    </p>
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                    {destinations.map((dest, i) => (
                        <div key={i} className="img-overlay-card card-hover shadow-card group cursor-default">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                <img
                                    src={dest.image}
                                    alt={dest.label}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="font-display text-white text-xl font-bold mb-1">
                                        {dest.label}
                                    </h3>
                                    <p className="font-body text-white/85 text-sm leading-snug">
                                        {dest.highlight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => onOpenLeadForm('General')}
                        className="btn-green px-8 py-3.5 rounded-lg text-base font-bold shadow-card"
                    >
                        Plan My Kerala Trip →
                    </button>
                </div>
            </div>
        </section>
    );
}
