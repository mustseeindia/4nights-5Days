interface FinalCTAProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

export default function FinalCTA({ onOpenLeadForm }: FinalCTAProps) {
    return (
        <section
            className="py-20 md:py-28 text-center bg-cream"
            aria-label="Final call to action"
        >
            <div className="max-w-2xl mx-auto px-4">

                <div className="flex justify-center mb-6">
                    <div className="flex gap-1.5">
                        {['🌿', '🌊', '🏔️'].map((emoji, i) => (
                            <span key={i} className="text-2xl">{emoji}</span>
                        ))}
                    </div>
                </div>

                <h2 className="font-display text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                    Ready to Plan Your<br />
                    <span className="text-indigo-700">Kerala Holiday?</span>
                </h2>

                <p className="font-body text-gray-600 text-base md:text-lg mb-8 max-w-lg mx-auto">
                    Join thousands of happy travelers who've experienced the magic of Kerala with us.
                </p>

                <button
                    onClick={() => onOpenLeadForm('General')}
                    className="btn-gold px-10 py-4 rounded-lg text-lg font-bold shadow-lg mb-4"
                >
                    Get Best Price Now →
                </button>

                <p className="font-body text-gray-500 text-sm flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Our Kerala expert will contact you within 10 minutes.
                </p>

            </div>
        </section>
    );
}
