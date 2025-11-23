"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const caseStudies = [
    {
        id: 1,
        title: "FinTech Revolution",
        category: "Web App",
        stats: { users: "+200%", speed: "0.3s", revenue: "+150%" },
        image: "/case-study-1.jpg" // Placeholder
    },
    {
        id: 2,
        title: "E-Commerce Giant",
        category: "Full Stack",
        stats: { users: "+500%", speed: "0.8s", revenue: "+300%" },
        image: "/case-study-2.jpg" // Placeholder
    },
    {
        id: 3,
        title: "HealthTech AI",
        category: "UI/UX Design",
        stats: { users: "+120%", speed: "0.4s", revenue: "+90%" },
        image: "/case-study-3.jpg" // Placeholder
    }
];

export default function WorkPage() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <h1 className="text-4xl font-bold text-gold mb-4 text-center">Selected Work</h1>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
                    Results that speak for themselves.
                </p>

                <div className="grid gap-8">
                    {caseStudies.map((study) => (
                        <motion.div
                            key={study.id}
                            layout
                            onClick={() => setActiveId(activeId === study.id ? null : study.id)}
                            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 cursor-pointer transition-all duration-500 ${activeId === study.id ? "border-gold ring-1 ring-gold" : "hover:border-white/30"
                                }`}
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
                                            {study.category}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white">{study.title}</h3>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${activeId === study.id ? "rotate-45 bg-gold text-black border-gold" : "text-white"}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeId === study.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="border-t border-white/10 pt-8 mt-8"
                                        >
                                            <div className="grid grid-cols-3 gap-8">
                                                {Object.entries(study.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-2xl md:text-4xl font-bold text-gold mb-1">
                                                            {value}
                                                        </div>
                                                        <div className="text-zinc-500 text-xs uppercase tracking-wider">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
