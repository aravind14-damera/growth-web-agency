"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const codeSnippet = `
<Card>
  <Header>Growth</Header>
  <Body>
    Scale your business
  </Body>
  <Button>Start</Button>
</Card>
`;

export function CodeTransformer() {
    const [showUI, setShowUI] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowUI((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            From <span className="text-gold">Code</span> to <span className="text-gold">Reality</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            We translate complex logic into beautiful, functional user interfaces.
                            Watch how our clean code transforms into premium experiences.
                        </p>
                    </div>

                    <div className="relative h-[400px] bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden p-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />

                        <motion.div
                            initial={false}
                            animate={{ opacity: showUI ? 0 : 1, x: showUI ? -50 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 p-8 font-mono text-sm text-zinc-300"
                        >
                            <pre>{codeSnippet}</pre>
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate={{ opacity: showUI ? 1 : 0, x: showUI ? 0 : 50, scale: showUI ? 1 : 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 bg-black border border-gold/30 rounded-xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.15)] w-64"
                        >
                            <div className="text-xl font-bold text-white mb-2">Growth</div>
                            <p className="text-zinc-400 mb-4">Scale your business</p>
                            <Button size="sm" className="w-full">Start</Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
