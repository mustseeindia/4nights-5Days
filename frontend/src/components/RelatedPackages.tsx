
interface RelatedPackagesProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

const packages = [
    {
        image: './assets/honeymoon-kerala.dim_600x400.jpg',
        name: 'Kerala Honeymoon',
        duration: '4N / 5D',
        price: '₹16,999',
        highlight: 'Romantic houseboat stay with flower-decorated rooms & candlelit dinners.',
        interest: 'Kerala Honeymoon',
    },
    {
        image: './assets/family-kerala.dim_600x400.jpg',
        name: 'Kerala Family Tour',
        duration: '6N / 7D',
        price: '₹21,499',
        highlight: 'Fun-filled family adventure with wildlife, beaches & backwater cruises.',
        interest: 'Kerala Family Tour',
    },
    {
        image: './assets/luxury-kerala.dim_600x400.jpg',
        name: 'Luxury Kerala',
        duration: '5N / 6D',
        price: '₹27,499',
        highlight: 'Premium resorts, infinity pools & exclusive experiences in God\'s Own Country.',
        interest: 'Luxury Kerala',
    },
    {
        image: './assets/short-kerala.dim_600x400.jpg',
        name: 'Short 3N/4D Getaway',
        duration: '3N / 4D',
        price: '₹12,999',
        highlight: 'Quick escape to Kerala\'s best — tea estates, waterfalls & backwaters.',
        interest: 'Short Kerala Getaway',
    },
];

export default function RelatedPackages({ onOpenLeadForm }: RelatedPackagesProps) {
    return (
        <section
            className="py-16 md:py-24 bg-cream"
            aria-label="Related Kerala packages"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        More Options
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Related Kerala Packages
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        Find the perfect Kerala experience for your travel style and budget.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-card card-hover border"
                            style={{ borderColor: 'oklch(0.88 0.015 95)' }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[3/2] overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3">
                                    <span
                                        className="font-body text-xs font-bold px-2.5 py-1 rounded-full text-white"
                                        style={{ backgroundColor: 'oklch(0.24 0.1 155)' }}
                                    >
                                        {pkg.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'oklch(0.18 0.02 200)' }}>
                                    {pkg.name}
                                </h3>
                                <p className="font-body text-sm text-gray-500 mb-3 leading-snug">
                                    {pkg.highlight}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-body text-xs text-gray-400 uppercase tracking-wide">Starting from</p>
                                        <p
                                            className="font-display text-xl font-bold"
                                            style={{ color: 'oklch(0.32 0.12 155)' }}
                                        >
                                            {pkg.price}
                                            <span className="font-body text-sm font-normal text-gray-400"> /person</span>
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => onOpenLeadForm(pkg.interest)}
                                        className="btn-gold px-5 py-2.5 rounded-lg text-sm font-bold"
                                    >
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seasonal note */}
                <p className="text-center font-body text-sm text-gray-400 italic">
                    ✦ Seasonal offers available for limited departures.
                </p>
            </div>
        </section>
    );
}
