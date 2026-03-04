export default function BrandBanner() {
    return (
        <div
            className="w-full flex items-center justify-center py-3 md:py-4 shadow-banner select-none"
            style={{ backgroundColor: "#0B3C91" }}
            aria-label="IndiaTourPackages brand banner"
        >
            <div className="flex items-center gap-3">
                <img
                    src="/assets/Gemini_Generated_Image_guhb0eguhb0eguhb-removebg-preview-1.png"
                    alt="IndiaTourPackages logo"
                    className="h-10 md:h-12 w-auto object-contain flex-shrink-0"
                    style={{ background: "none" }}
                />

                <div className="flex flex-col items-start">
                    <span
                        className="text-white font-bold tracking-widest text-lg md:text-2xl font-body uppercase"
                        style={{ letterSpacing: "0.18em" }}
                    >
                        IndiaTourPackages
                    </span>

                    <span
                        className="text-white/85 text-xs md:text-sm font-body mt-0.5 tracking-wide"
                        style={{ letterSpacing: "0.06em" }}
                    >
                        Trusted Kerala Tour Specialists
                    </span>
                </div>
            </div>
        </div>
    );
}
