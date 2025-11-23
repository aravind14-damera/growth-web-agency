"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Handle form submission logic here
    };

    return (
        <main className="min-h-screen bg-black text-white pt-20 flex items-center">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gold mb-4 text-center">Start Your Growth</h1>
                    <p className="text-zinc-400 text-center mb-12">
                        Ready to scale? Let's discuss your next big project.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-900/50 border border-gold/20 rounded-2xl p-12 text-center"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Project Type</label>
                                <select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors">
                                    <option>Web Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Mobile App</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
