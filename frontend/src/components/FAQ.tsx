import { ChevronDown } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        q: 'What is the best time to visit Kerala?',
        a: 'October to March is the ideal time to visit Kerala. The weather is pleasant, skies are clear, and all attractions are fully accessible. The monsoon season (June–September) offers lush green landscapes but some activities may be limited.',
    },
    {
        q: 'Is the houseboat private?',
        a: 'Yes, absolutely. Our package includes a fully private houseboat on the Alleppey backwaters with a dedicated crew, chef, and all meals included. You will not share the houseboat with other guests.',
    },
    {
        q: 'Is a cab included in the package?',
        a: 'Yes, a private air-conditioned cab is included for the entire duration of your trip — from airport/railway pickup to all sightseeing transfers and final drop-off. No shared transport.',
    },
    {
        q: 'Can the itinerary be customized?',
        a: 'Absolutely! Every itinerary is fully customizable based on your travel dates, group size, interests, and budget. Simply submit your enquiry and our Kerala travel expert will design a personalized plan for you.',
    },
    {
        q: 'How do I confirm my booking?',
        a: 'Submit the enquiry form on this page with your details. Our Kerala travel expert will contact you within 10 minutes to discuss your requirements, finalize the itinerary, and guide you through the booking process.',
    },
];

export default function FAQ() {
    return (
        <section
            className="py-16 md:py-24 bg-cream"
            aria-label="Frequently asked questions"
        >
            <div className="max-w-3xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        Got Questions?
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        Everything you need to know before booking your Kerala trip.
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            className="bg-white rounded-xl border px-5 shadow-xs"
                            style={{ borderColor: 'oklch(0.88 0.015 95)' }}
                        >
                            <AccordionTrigger
                                className="font-body font-semibold text-left text-sm md:text-base py-4 hover:no-underline"
                                style={{ color: 'oklch(0.18 0.02 200)' }}
                            >
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-sm text-gray-600 leading-relaxed pb-4">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
