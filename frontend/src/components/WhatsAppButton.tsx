import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_URL =
    'https://wa.me/918197417772?text=Hi%20I%20am%20interested%20in%20Kerala%20tour%20package';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Slight delay before showing for better UX
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        // Track WhatsApp click
        console.log('[Analytics] WhatsApp button clicked', {
            timestamp: new Date().toISOString(),
            url: WHATSAPP_URL,
        });
    };

    if (!visible) return null;

    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        aria-label="Chat with Travel Expert on WhatsApp"
                        className="fixed z-[9999] flex items-center justify-center rounded-full shadow-lg whatsapp-pulse transition-transform hover:scale-110 active:scale-95"
                        style={{
                            bottom: '90px',
                            right: '20px',
                            width: '56px',
                            height: '56px',
                            backgroundColor: '#25D366',
                        }}
                    >
                        <SiWhatsapp className="w-7 h-7 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent
                    side="left"
                    className="font-body text-sm font-semibold"
                    style={{ backgroundColor: 'oklch(0.24 0.1 155)', color: 'white', border: 'none' }}
                >
                    Chat with Travel Expert
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
