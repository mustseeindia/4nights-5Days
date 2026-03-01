import { Shield, Star, Trophy, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface HeroSectionProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

const trustBadges = [
    { icon: <Star className="w-4 h-4 fill-current" />, text: '4.8/5 Rated' },
    { icon: <Trophy className="w-4 h-4" />, text: '10+ Years Experience' },
    { icon: <Shield className="w-4 h-4" />, text: 'Secure Booking' },
    { icon: <Phone className="w-4 h-4" />, text: 'Dedicated Travel Support' },
];

// ─── 3D Particle System ───────────────────────────────────────────────────────
function Particles({ count = 120 }: { count?: number }) {
    const meshRef = useRef<THREE.Points>(null!);
    const { size } = useThree();

    const [positions, colors] = (() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        // Tropical green: #1a5c38 → oklch approx, gold: #c9a84c
        const palette = [
            new THREE.Color('#1a5c38'),
            new THREE.Color('#2d8653'),
            new THREE.Color('#c9a84c'),
            new THREE.Color('#e8c96a'),
            new THREE.Color('#3aad6e'),
        ];

        for (let i = 0; i < count; i++) {
            pos[i * 3 + 0] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

            const c = palette[Math.floor(Math.random() * palette.length)];
            col[i * 3 + 0] = c.r;
            col[i * 3 + 1] = c.g;
            col[i * 3 + 2] = c.b;
        }
        return [pos, col];
    })();

    const speeds = useRef(
        Array.from({ length: count }, () => ({
            vx: (Math.random() - 0.5) * 0.004,
            vy: (Math.random() - 0.5) * 0.003 + 0.001,
            vz: (Math.random() - 0.5) * 0.002,
            phase: Math.random() * Math.PI * 2,
        }))
    );

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const geo = meshRef.current.geometry;
        const posAttr = geo.attributes.position as THREE.BufferAttribute;
        const t = clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const s = speeds.current[i];
            let x = posAttr.getX(i) + s.vx + Math.sin(t * 0.3 + s.phase) * 0.003;
            let y = posAttr.getY(i) + s.vy;
            let z = posAttr.getZ(i) + s.vz;

            // Wrap around
            if (x > 10) x = -10;
            if (x < -10) x = 10;
            if (y > 6) y = -6;
            if (y < -6) y = 6;
            if (z > 4) z = -4;
            if (z < -4) z = 4;

            posAttr.setXYZ(i, x, y, z);
        }
        posAttr.needsUpdate = true;
        meshRef.current.rotation.y = Math.sin(t * 0.05) * 0.08;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.12}
                vertexColors
                transparent
                opacity={0.85}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

// ─── Floating Orbs ────────────────────────────────────────────────────────────
function FloatingOrb({ position, color, scale, speed }: {
    position: [number, number, number];
    color: string;
    scale: number;
    speed: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime() * speed;
        meshRef.current.position.y = position[1] + Math.sin(t) * 0.4;
        meshRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.3;
        meshRef.current.rotation.x = t * 0.3;
        meshRef.current.rotation.z = t * 0.2;
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.18}
                wireframe={false}
                roughness={0.1}
                metalness={0.8}
            />
        </mesh>
    );
}

function OrbWireframe({ position, color, scale, speed }: {
    position: [number, number, number];
    color: string;
    scale: number;
    speed: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime() * speed;
        meshRef.current.position.y = position[1] + Math.cos(t) * 0.5;
        meshRef.current.position.x = position[0] + Math.sin(t * 0.5) * 0.4;
        meshRef.current.rotation.y = t * 0.4;
        meshRef.current.rotation.x = t * 0.2;
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <torusGeometry args={[1, 0.3, 8, 24]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.22}
                wireframe
                roughness={0.2}
                metalness={0.9}
            />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#c9a84c" />
            <pointLight position={[-5, -3, 3]} intensity={0.8} color="#2d8653" />

            <Particles count={140} />

            <FloatingOrb position={[-5, 1.5, -2]} color="#c9a84c" scale={0.9} speed={0.4} />
            <FloatingOrb position={[5, -1, -3]} color="#2d8653" scale={1.1} speed={0.3} />
            <FloatingOrb position={[0, 2.5, -4]} color="#e8c96a" scale={0.6} speed={0.6} />
            <FloatingOrb position={[-3, -2, -1]} color="#1a5c38" scale={0.75} speed={0.5} />

            <OrbWireframe position={[4, 2, -2]} color="#c9a84c" scale={0.8} speed={0.35} />
            <OrbWireframe position={[-4, -1.5, -3]} color="#3aad6e" scale={0.65} speed={0.45} />
            <OrbWireframe position={[1.5, -2.5, -1]} color="#e8c96a" scale={0.5} speed={0.55} />
        </>
    );
}

// ─── Parallax Canvas Wrapper ──────────────────────────────────────────────────
function ParallaxCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollY = window.scrollY;
            containerRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'transform' }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                style={{ width: '100%', height: '100%' }}
                gl={{ alpha: true, antialias: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────
export default function HeroSection({ onOpenLeadForm }: HeroSectionProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* ── Background image ── */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/4n5dheader.jpg"
                    alt="Kerala houseboat on backwaters with couple"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Deep gradient overlay for legibility */}
                <div className="absolute inset-0 hero-overlay-houseboat" />
            </div>

            {/* ── Three.js 3D Canvas (behind text, no pointer events) ── */}
            <div
                className="absolute inset-0 z-[1]"
                style={{ pointerEvents: 'none' }}
            >
                <ParallaxCanvas />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center">

                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body mb-5 tracking-wide hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{
                        backgroundColor: 'oklch(0.72 0.12 75)',
                        color: 'oklch(0.15 0.02 200)',
                        animationDelay: '0s',
                    }}
                >
                    ✦ Trusted by 10,000+ Travelers | Premium Stays, Private Cab & Zero Hidden Charges.
                </div>

                {/* Headline with 3D gradient text effect */}
                <h1
                    className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 hero-headline hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{ animationDelay: '0.15s' }}
                >
                    4 Nights 5 Days Kerala Tour Package
                    <span className="block hero-subline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                        Munnar, Thekkady &amp; Houseboat
                    </span>
                </h1>

                {/* Subheadline */}
                <p
                    className={`font-body text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{ animationDelay: '0.3s' }}
                >
                    Starting from{' '}
                    <span className="font-bold hero-price-text">₹8,599 per person</span>
                    {' '}| Private Cab | 3★ &amp; 4★ Hotels | 24/7 Support
                </p>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-3 mb-4 w-full max-w-md sm:max-w-none sm:w-auto hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{ animationDelay: '0.45s' }}
                >
                    <button
                        onClick={() => onOpenLeadForm('General')}
                        className="btn-gold px-7 py-3.5 rounded-lg text-base font-bold shadow-lg hero-cta-primary"
                    >
                        Get Best Quote in 10 Minutes
                    </button>
                    <a
    href="https://www.indiatourpackages.com/detail/kerala-dream-escape-with-houseboat"
    target="_blank"
    rel="noopener noreferrer"
    className="px-7 py-3.5 rounded-lg text-base font-bold border-2 border-white text-white hover:bg-white/10 transition-colors font-body hero-cta-secondary inline-block"
>
    Check Availability
</a>
                </div>

                {/* Urgency */}
                <p
                    className={`font-body text-sm text-white/80 mb-8 flex items-center gap-1.5 hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{ animationDelay: '0.55s' }}
                >
                    <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    Limited houseboat availability during peak season.
                </p>

                {/* Trust Badges */}
                <div
                    className={`flex flex-wrap justify-center gap-3 md:gap-5 hero-badge-anim ${mounted ? 'hero-visible' : 'hero-hidden'}`}
                    style={{ animationDelay: '0.65s' }}
                >
                    {trustBadges.map((badge, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-body font-medium"
                        >
                            <span style={{ color: 'oklch(0.88 0.1 80)' }}>{badge.icon}</span>
                            {badge.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60">
                <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-white/40 animate-pulse" />
            </div>
        </section>
    );
}
