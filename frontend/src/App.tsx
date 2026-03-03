import { useState, useEffect } from 'react';
import BrandBanner from './components/BrandBanner';
import HeroSection from './components/HeroSection';
import WhyVisitKerala from './components/WhyVisitKerala';
import Itinerary from './components/Itinerary';
import Inclusions from './components/Inclusions';
import Pricing from './components/Pricing';
import RelatedPackages from './components/RelatedPackages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import LeadFormModal from './components/LeadFormModal';
import WhatsAppButton from './components/WhatsAppButton';
import PageFooter from './components/PageFooter';

export default function App() {
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

    // Load Zoho SalesIQ after React has fully mounted — isolated, non-blocking
    const [selectedPackageInterest, setSelectedPackageInterest] = useState('General');

    const handleOpenLeadForm = (packageInterest: string) => {
        setSelectedPackageInterest(packageInterest || 'General');
        setIsLeadFormOpen(true);
    };

    const handleCloseLeadForm = () => {
        setIsLeadFormOpen(false);
    };

    return (
        <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Brand Banner */}
            <BrandBanner />

            {/* Main content */}
            <main>
                {/* Hero */}
                <HeroSection onOpenLeadForm={handleOpenLeadForm} />

                {/* Why Visit Kerala */}
              

                {/* Itinerary */}
                

                {/* Inclusions & Exclusions */}
               

                {/* Pricing */}
                <Pricing onOpenLeadForm={handleOpenLeadForm} />

                {/* Related Packages */}
                <RelatedPackages onOpenLeadForm={handleOpenLeadForm} />

                {/* Testimonials */}
                <Testimonials />

                {/* FAQ */}
                <FAQ />

                {/* Final CTA */}
                <FinalCTA onOpenLeadForm={handleOpenLeadForm} />
            </main>

            {/* Footer */}
            <PageFooter />

            {/* Global Lead Form Modal */}
            <LeadFormModal
                isOpen={isLeadFormOpen}
                onClose={handleCloseLeadForm}
                packageInterest={selectedPackageInterest}
            />

            {/* Sticky WhatsApp Button */}
            <WhatsAppButton />
        </div>
    );
}
