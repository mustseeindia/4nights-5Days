import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import { useSubmitForm } from '@/hooks/useQueries';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Declare global emailjs froçm CDN
declare global {
    interface Window {
        emailjs: {
            init: (options: { publicKey: string }) => void;
            send: (
                serviceId: string,
                templateId: string,
                templateParams: Record<string, string>,
                publicKey: string
            ) => Promise<{ status: number; text: string }>;
        };
    }
}

const EMAILJS_SERVICE_ID = 'service_ji7dzwr';
const EMAILJS_TEMPLATE_ID = 'template_owxejhl';
const EMAILJS_PUBLIC_KEY = 'oG0kNHoaLmQMbAmYW';

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageInterest: string;
}



const WHATSAPP_NUMBER = '918197417772';

function buildWhatsAppMessage(
    packageName: string,
    name: string,
    phone: string,
    travelDate: string,
    adults: string,
): string {
    return [
        'New Kerala Tour Lead 🚀',
        `Package: ${packageName}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Travel Date: ${travelDate}`,
        `Adults: ${adults}`,
        'Source: IndiaTourPackages Landing Page',
    ].join('\n');
}

export default function LeadFormModal({ isOpen, onClose, packageInterest }: LeadFormModalProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [travelDate, setTravelDate] = useState<Date | undefined>(undefined);
    const [adults, setAdults] = useState('2');
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [emailError, setEmailError] = useState('');

    const submitForm = useSubmitForm();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!name.trim()) {
            setValidationError('Please enter your full name.');
            return;
        }
        if (!phone.trim()) {
            setValidationError('Please enter your phone number.');
            return;
        }
        if (!travelDate) {
    setValidationError('Please select your travel date.');
    return;
}
        if (!adults) {
            setValidationError('Please enter the number of adults.');
            return;
        }

        setValidationError('');
        setEmailError('');
        setIsRedirecting(true);
        const formattedTravelDate = travelDate
    ? format(travelDate, 'dd MMMM yyyy')
    : '';

        const packageName = packageInterest && packageInterest !== 'General'
            ? packageInterest
            : 'Kerala Tour Package (5N/6D)';

        // Fire-and-forget backend submission (non-blocking)
        submitForm.mutate({
            name: name.trim(),
            phone: phone.trim(),
            travelMonth: formattedTravelDate,
            numberOfAdults: parseInt(adults, 10),
            packageInterest: packageName,
        });

        // Send email via EmailJS (non-blocking, fire-and-forget)
        const templateParams = {
            name: name.trim(),
            phone: phone.trim(),
            travel_date: formattedTravelDate,
            adults: adults,
            package_interest: packageName,
            time: new Date().toLocaleString(),
        };

        try {
            if (window.emailjs) {
                await window.emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams,
                    EMAILJS_PUBLIC_KEY
                );
            }
        } catch (err) {
            console.error('EmailJS send failed:', err);
            setEmailError('Email notification failed, but we will still connect you on WhatsApp.');
        }

        // Build and encode WhatsApp message
        const message = buildWhatsAppMessage(
            packageName,
            name.trim(),
            phone.trim(),
            formattedTravelDate,
            adults,
        );
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Small delay so the user sees the loading state before redirect
        setTimeout(() => {
            // Open in new tab on desktop, same tab on mobile
            const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
            if (isMobile) {
                window.location.href = whatsappUrl;
            } else {
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                setIsRedirecting(false);
            }
        }, 600);
    };

    const handleClose = () => {
        onClose();
        // Reset after animation
        setTimeout(() => {
            setName('');
            setPhone('');
            setTravelDate(undefined);
            setAdults('2');
            setIsRedirecting(false);
            setValidationError('');
            setEmailError('');
        }, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent
                className="max-w-md w-full mx-4 p-0 overflow-hidden rounded-2xl border-0 shadow-modal"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {/* Header */}
                <div
                    className="px-6 pt-6 pb-5 text-white"
                    style={{ backgroundColor: 'oklch(0.24 0.1 155)' }}
                >
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-white font-display">
                            Get Free Customized Quote
                        </DialogTitle>
                        <DialogDescription className="text-white/80 text-sm mt-1 font-body">
                            {packageInterest && packageInterest !== 'General'
                                ? `Enquiring about: ${packageInterest}`
                                : 'Kerala Tour Package – 5N/6D starting ₹18,999/person'}
                        </DialogDescription>
                    </DialogHeader>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="space-y-1.5">
                            <Label htmlFor="lead-name" className="text-sm font-semibold font-body text-gray-700">
                                Your Name *
                            </Label>
                            <Input
                                id="lead-name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => { setName(e.target.value); setValidationError(''); }}
                                required
                                className="h-11 font-body"
                                disabled={isRedirecting}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="lead-phone" className="text-sm font-semibold font-body text-gray-700">
                                Phone Number *
                            </Label>
                            <Input
                                id="lead-phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value); setValidationError(''); }}
                                required
                                className="h-11 font-body"
                                disabled={isRedirecting}
                            />
                        </div>

                        <div className="space-y-1.5">
    <Label className="text-sm font-semibold font-body text-gray-700">
        Travel Date *
    </Label>

    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant="outline"
                className={cn(
                    'w-full h-11 justify-start text-left font-body',
                    !travelDate && 'text-muted-foreground'
                )}
                disabled={isRedirecting}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {travelDate ? format(travelDate, 'dd MMMM yyyy') : 'Select travel date'}
            </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
            <Calendar
                mode="single"
                selected={travelDate}
                onSelect={(date) => {
                    setTravelDate(date);
                    setValidationError('');
                }}
                disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                }
                initialFocus
            />
        </PopoverContent>
    </Popover>
    <p className="text-xs text-gray-400"> Flexible? Our experts will suggest best dates & prices. </p>
</div>
                        <div className="space-y-1.5">
                            <Label htmlFor="lead-adults" className="text-sm font-semibold font-body text-gray-700">
                                Number of Adults *
                            </Label>
                            <Input
                                id="lead-adults"
                                type="number"
                                min="1"
                                max="20"
                                placeholder="2"
                                value={adults}
                                onChange={(e) => { setAdults(e.target.value); setValidationError(''); }}
                                required
                                className="h-11 font-body"
                                disabled={isRedirecting}
                            />
                        </div>

                        {/* Hidden package interest field with ID */}
                        <input
                            type="hidden"
                            id="lead-package-interest"
                            value={packageInterest || 'General'}
                            readOnly
                        />

                        {validationError && (
                            <p className="text-sm text-red-500 font-body">
                                {validationError}
                            </p>
                        )}

                        {emailError && !validationError && (
                            <p className="text-sm text-amber-600 font-body">
                                {emailError}
                            </p>
                        )}

                        {submitForm.isError && !validationError && !emailError && (
                            <p className="text-sm text-red-500 font-body">
                                Something went wrong saving your details, but we'll still connect you on WhatsApp.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isRedirecting || !name || !phone || !travelDate || !adults}
                            className="btn-gold w-full py-3.5 rounded-lg text-base font-bold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                            {isRedirecting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Redirecting to WhatsApp…
                                </>
                            ) : (
                                'Get Free Customized Quote →'
                            )}
                        </button>

                        <p className="text-xs text-center text-gray-400 font-body">
                            🔒 Your information is 100% secure and private.
                        </p>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
