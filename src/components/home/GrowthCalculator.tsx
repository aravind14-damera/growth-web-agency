"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function GrowthCalculator() {
    const [budget, setBudget] = useState("");
    const [result, setResult] = useState<{ roi: string; traffic: string } | null>(null);

    const calculate = () => {
        const b = parseFloat(budget);
        if (!isNaN(b)) {
            setResult({
                roi: (b * 3.5).toLocaleString(),
                traffic: "+150%"
            });
        }
    };

    return (
        <section className="py-24 bg-zinc-950 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Growth <span className="text-gold">Calculator</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            Estimate your potential ROI with our premium web development services.
                            See the numbers that matter.
                        </p>

                        <div className="space-y-6 max-w-md">
                            <div>
                                <label className="text-sm font-medium text-zinc-300 mb-2 block">Monthly Marketing Budget ($)</label>
                                <Input
                                    type="number"
                                    placeholder="5000"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                />
                            </div>
                            <Button onClick={calculate} className="w-full">Calculate ROI</Button>
                        </div>
                    </div>

                    <div className="relative h-[400px] bg-black rounded-2xl border border-gold/20 p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 space-y-8"
                            >
                                <div>
                                    <div className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Estimated Monthly ROI</div>
                                    <div className="text-5xl md:text-6xl font-bold text-gold">${result.roi}</div>
                                </div>
                                <div>
                                    <div className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Traffic Increase</div>
                                    <div className="text-4xl font-bold text-white">{result.traffic}</div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="text-zinc-500 relative z-10">
                                Enter your budget to see the magic numbers.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
