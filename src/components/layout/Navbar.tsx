"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-gold">
                    GROWTH
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-gold",
                                pathname === item.href ? "text-gold" : "text-zinc-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-gold transition-colors">
                        Login
                    </Link>
                    <Link href="/contact">
                        <Button size="sm">Start Project</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-4 md:hidden"
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-gold",
                                    pathname === item.href ? "text-gold" : "text-zinc-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-gold">
                            Login
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full">Start Project</Button>
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
