import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 text-zinc-400">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-gold">
                            GROWTH
                        </Link>
                        <p className="mt-4 text-sm">
                            Crafting web experiences that build growth.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services" className="hover:text-gold">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-gold">UI/UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-gold">SEO Optimization</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
                            <li><Link href="/work" className="hover:text-gold">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gold">Twitter</a></li>
                            <li><a href="#" className="hover:text-gold">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-gold">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Growth Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
