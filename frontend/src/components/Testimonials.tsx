import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Priya S.',
        city: 'Bangalore',
        rating: 5,
        review:
            'The private houseboat experience on the Alleppey backwaters was absolutely magical — waking up to misty waters and coconut palms was surreal. IndiaTourPackages handled every detail perfectly. Highly recommend!',
        trip: 'Kerala 5N/6D Package',
    },
    {
        name: 'Rahul M.',
        city: 'Delhi',
        rating: 5,
        review:
            'Munnar\'s tea gardens took our breath away — the rolling green hills and cool mountain air were unlike anything we\'d experienced. Our cab driver was knowledgeable and the hotels were excellent value. Will book again!',
        trip: 'Kerala Family Tour',
    },
    {
        name: 'Ananya K.',
        city: 'Mumbai',
        rating: 5,
        review:
            'From the moment we enquired to the final day of our trip, the team was responsive and professional. The itinerary was perfectly paced — not rushed, not boring. Kovalam beach sunset on Day 5 was the highlight!',
        trip: 'Kerala Honeymoon Package',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'oklch(0.72 0.12 75)' }} />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: 'white' }}
            aria-label="Customer testimonials"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        Traveler Reviews
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        What Our Travelers Say
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        Real experiences from real travelers who explored Kerala with us.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-6 border card-hover shadow-card flex flex-col"
                            style={{ backgroundColor: 'oklch(0.98 0.012 95)', borderColor: 'oklch(0.88 0.015 95)' }}
                        >
                            {/* Quote mark */}
                            <div
                                className="text-4xl font-display leading-none mb-3 -mt-1"
                                style={{ color: 'oklch(0.88 0.08 80)' }}
                            >
                                "
                            </div>

                            <p className="font-body text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                                {t.review}
                            </p>

                            <div className="border-t pt-4" style={{ borderColor: 'oklch(0.88 0.015 95)' }}>
                                <StarRating count={t.rating} />
                                <div className="mt-2">
                                    <p className="font-body font-bold text-sm" style={{ color: 'oklch(0.18 0.02 200)' }}>
                                        {t.name}
                                    </p>
                                    <p className="font-body text-xs text-gray-400">
                                        {t.city} · {t.trip}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
