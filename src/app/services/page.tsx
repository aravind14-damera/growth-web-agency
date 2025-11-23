import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code, Layout, Smartphone, Zap, Search, PenTool } from "lucide-react";
import { EstimationTool } from "@/components/services/EstimationTool";

const services = [
    {
        icon: Code,
        title: "Full-Stack Development",
        description: "Robust, scalable, and secure architectures built on modern frameworks like Next.js and Node.js."
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Intuitive, aesthetic, and user-centric designs that captivate and convert."
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Native and cross-platform mobile applications that extend your reach to every device."
    },
    {
        icon: Zap,
        title: "Website Revamp",
        description: "Transform outdated sites into modern, high-performance digital assets."
    },
    {
        icon: PenTool,
        title: "Branding + Design System",
        description: "Cohesive visual identities that tell your brand's story consistently across all channels."
    },
    {
        icon: Search,
        title: "SEO + Performance",
        description: "Optimized for speed and visibility, ensuring you're found by the right audience."
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <h1 className="text-4xl font-bold text-gold mb-4 text-center">Our Services</h1>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
                    Comprehensive digital solutions tailored to your growth.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 hover:bg-zinc-900 transition-all duration-300 group"
                        >
                            <service.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <EstimationTool />
            </div>
        </main>
    );
}
