"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const options = {
    type: [
        { id: "landing", label: "Landing Page", price: 1000 },
        { id: "corporate", label: "Corporate Site", price: 2500 },
        { id: "ecommerce", label: "E-Commerce", price: 5000 },
    ],
    features: [
        { id: "seo", label: "SEO Optimization", price: 500 },
        { id: "cms", label: "CMS Integration", price: 800 },
        { id: "analytics", label: "Advanced Analytics", price: 300 },
    ],
};

export function EstimationTool() {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const toggleFeature = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const total = (selectedType ? options.type.find(t => t.id === selectedType)?.price || 0 : 0) +
        selectedFeatures.reduce((acc, fid) => acc + (options.features.find(f => f.id === fid)?.price || 0), 0);

    return (
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto my-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Instant Quote Estimator</h3>

            <div className="space-y-8">
                <div>
                    <label className="text-sm font-medium text-gold mb-4 block uppercase tracking-wider">Website Type</label>
                    <div className="grid grid-cols-3 gap-4">
                        {options.type.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => setSelectedType(opt.id)}
                                className={`p-4 rounded-xl border transition-all ${selectedType === opt.id
                                        ? "bg-gold text-black border-gold font-bold"
                                        : "bg-black border-white/10 text-zinc-400 hover:border-white/30"
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gold mb-4 block uppercase tracking-wider">Add-on Features</label>
                    <div className="grid grid-cols-3 gap-4">
                        {options.features.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => toggleFeature(opt.id)}
                                className={`p-4 rounded-xl border transition-all ${selectedFeatures.includes(opt.id)
                                        ? "bg-white/10 border-gold text-white"
                                        : "bg-black border-white/10 text-zinc-400 hover:border-white/30"
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                    <div className="text-zinc-400">Estimated Cost</div>
                    <div className="text-4xl font-bold text-gold">${total.toLocaleString()}</div>
                </div>

                <Button className="w-full" size="lg">Request Proposal</Button>
            </div>
        </div>
    );
}
