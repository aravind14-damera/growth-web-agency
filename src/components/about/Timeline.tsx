"use client";

import { motion } from "framer-motion";

const steps = [
    { title: "Research", desc: "Deep dive into your market and goals." },
    { title: "Wireframing", desc: "Blueprinting the user journey." },
    { title: "UI/UX Design", desc: "Crafting the visual experience." },
    { title: "Development", desc: "Writing clean, scalable code." },
    { title: "QA Testing", desc: "Rigorous bug hunting and optimization." },
    { title: "Deployment", desc: "Launching your product to the world." },
];

export function Timeline() {
    return (
        <div className="relative py-20">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

            <div className="space-y-24">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-gold rounded-full z-10" />

                        <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                            <div className="text-gold font-bold text-xl mb-2">0{i + 1}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-zinc-400">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
