"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5,
            });

            // Particle animation placeholder (can be enhanced with canvas)
            gsap.to(".particle", {
                y: -100,
                opacity: 0,
                duration: "random(2, 5)",
                stagger: {
                    amount: 2,
                    from: "random",
                    repeat: -1,
                },
                ease: "none",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20"
        >
            {/* Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute h-1 w-1 rounded-full bg-gold"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100 + 100}%`,
                            opacity: Math.random(),
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 px-4 text-center md:px-6">
                <div ref={textRef} className="mx-auto max-w-4xl space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        We Engineer Web Experiences That <span className="text-gold">Create Growth.</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
                        From UI to full-stack execution, we build digital products that scale.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="animate-pulse-gold">
                                Start Your Growth
                            </Button>
                        </Link>
                        <Link href="/work">
                            <Button variant="outline" size="lg">
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
