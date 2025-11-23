"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        title: "Strategy",
        description: "We analyze your market, competitors, and goals to blueprint a path to success.",
        details: ["Market Analysis", "Competitor Research", "User Personas", "Growth Roadmap"],
        color: "from-yellow-600 to-yellow-400",
    },
    {
        id: 2,
        title: "Design",
        description: "We craft visual experiences that resonate with your audience and embody your brand.",
        details: ["UI/UX Design", "Design Systems", "Prototyping", "Brand Identity"],
        color: "from-yellow-400 to-yellow-200",
    },
    {
        id: 3,
        title: "Development",
        description: "We code with precision, ensuring performance, security, and scalability.",
        details: ["Frontend Dev", "Backend Architecture", "API Integration", "Performance Tuning"],
        color: "from-yellow-200 to-white",
    },
];

export function GrowthEngine() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        The <span className="text-gold">Growth Web Engine</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Our signature process to transform your digital presence into a growth machine.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            className={cn(
                                "relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-500",
                                activeStep === step.id ? "border-gold shadow-[0_0_30px_rgba(255,215,0,0.2)]" : "hover:border-white/30"
                            )}
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                            layout
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 bg-gradient-to-br",
                                    step.color,
                                    "text-black"
                                )}>
                                    {step.id}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-zinc-400 mb-6">{step.description}</p>

                                <AnimatePresence>
                                    {activeStep === step.id && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-2"
                                        >
                                            {step.details.map((detail, i) => (
                                                <motion.li
                                                    key={detail}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center text-gold text-sm"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                                                    {detail}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
