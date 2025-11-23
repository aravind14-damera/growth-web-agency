"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-gold text-black hover:bg-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.5)]",
            outline: "border border-gold text-gold hover:bg-gold/10",
            ghost: "text-gold hover:bg-gold/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...(props as any)}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
