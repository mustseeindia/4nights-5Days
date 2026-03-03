import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SiWhatsapp } from 'react-icons/si';
import { Phone } from 'lucide-react';

const WHATSAPP_URL =
    'https://wa.me/918197417772?text=Hi%20I%20am%20interested%20in%20Kerala%20tour%20package';

const CALL_URL = 'tel:+918197417772';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleWhatsAppClick = () => {
        console.log('[Analytics] WhatsApp button clicked', {
            timestamp: new Date().toISOString(),
            url: WHATSAPP_URL,
        });
    };

    const handleCallClick = () => {
        console.log('[Analytics] Call button clicked', {
            timestamp: new Date().toISOString(),
            url: CALL_URL,
        });
    };

    if (!visible) return null;

    return (
        <TooltipProvider delayDuration={200}>
            {/* CALL BUTTON */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={CALL_URL}
                        onClick={handleCallClick}
                        aria-label="Call Travel Expert"
                        className="fixed z-[9999] flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                        style={{
                            bottom: '160px', // positioned above WhatsApp
                            right: '20px',
                            width: '56px',
                            height: '56px',
                            backgroundColor: '#0A66C2',
                        }}
                    >
                        <Phone className="w-6 h-6 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent
                    side="left"
                    className="font-body text-sm font-semibold"
                    style={{ backgroundColor: 'oklch(0.24 0.1 155)', color: 'white', border: 'none' }}
                >
                    Call Travel Expert
                </TooltipContent>
            </Tooltip>

            {/* WHATSAPP BUTTON */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
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
