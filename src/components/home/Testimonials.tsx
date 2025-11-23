"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "Growth Agency transformed our digital presence. Our conversion rate doubled within a month of launch.",
        author: "Sarah Johnson",
        role: "CEO, FinTech Solutions"
    },
    {
        id: 2,
        text: "The most professional team we've worked with. The gold standard in web development.",
        author: "Michael Chen",
        role: "Founder, TechStart"
    },
    {
        id: 3,
        text: "Incredible attention to detail. The animations and user experience are simply world-class.",
        author: "Emma Davis",
        role: "Marketing Director, Luxury Brands"
    }
];

export function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                    Client <span className="text-gold">Stories</span>
                </h2>

                <div className="relative h-64 max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-900/30 border border-gold/10 backdrop-blur-sm"
                        >
                            <p className="text-xl md:text-3xl font-light text-zinc-200 mb-8 italic">
                                "{testimonials[index].text}"
                            </p>
                            <div>
                                <div className="text-gold font-bold text-lg">{testimonials[index].author}</div>
                                <div className="text-zinc-500 text-sm">{testimonials[index].role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold" : "bg-zinc-700 hover:bg-zinc-500"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
