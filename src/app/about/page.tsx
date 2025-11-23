import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <h1 className="text-4xl font-bold text-gold mb-8">About Us</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-300 mb-8">
                        We are Growth, a web development agency dedicated to engineering digital experiences that drive business success.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 my-16">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-zinc-400">
                                To empower businesses with cutting-edge web technologies that not only look stunning but perform exceptionally. We believe in the power of code to transform ideas into scalable realities.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-zinc-400">
                                To be the global standard for premium web development, setting benchmarks in design, performance, and innovation.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
                    <Timeline />

                    <h2 className="text-3xl font-bold text-white mb-8 text-center mt-24">The Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-gold transition-colors group">
                                <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-center text-white">Team Member {i}</h3>
                                <p className="text-center text-gold text-sm">Senior Developer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
