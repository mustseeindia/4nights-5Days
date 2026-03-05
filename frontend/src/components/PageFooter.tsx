export default function PageFooter() {
    const year = new Date().getFullYear();
    const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'indiatourpackages';

    return (
        <footer
            className="py-8 text-center"
            style={{ backgroundColor: '#0B3C91' }}
            aria-label="Page footer"
        >
            <div className="max-w-4xl mx-auto px-4">
                <p className="font-body text-white text-xs">
                    © {year} IndiaTourPackages. All rights reserved.
                </p>

                <p className="font-body text-white text-xs mt-1">
                    Built by{' '}
                    <a
                        href="https://www.linkedin.com/in/yashwant-k-511313219/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white/80 transition-colors"
                    >
                        Yashwant.K
                    </a>
                </p>
            </div>
        </footer>
    );
}
