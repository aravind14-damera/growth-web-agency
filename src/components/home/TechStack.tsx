"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL", "PostgreSQL", "AWS"
];

export function TechStack() {
    return (
        <section className="py-24 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Tech Stack <span className="text-gold">Spectrum</span>
                    </h2>
                    <p className="text-zinc-400">
                        Powered by the most advanced technologies in the web ecosystem.
                    </p>
                </div>

                <div className="relative flex items-center justify-center py-20">
                    <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

                    <div className="relative z-10 flex gap-8 overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20,
                            }}
                            className="flex gap-12 whitespace-nowrap"
                        >
                            {[...technologies, ...technologies].map((tech, i) => (
                                <div
                                    key={`${tech}-${i}`}
                                    className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 hover:from-gold hover:to-yellow-200 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
