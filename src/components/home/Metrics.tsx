"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const metrics = [
    { label: "Load Speed", value: 0.5, suffix: "s" },
    { label: "Conversion Boost", value: 200, suffix: "%" },
    { label: "SEO Score", value: 100, suffix: "" },
    { label: "User Engagement", value: 150, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current * 10) / 10);
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function Metrics() {
    return (
        <section className="py-24 bg-black border-y border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-gold mb-2">
                                <Counter value={metric.value} suffix={metric.suffix} />
                            </div>
                            <div className="text-zinc-400 text-sm md:text-base uppercase tracking-wider">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
