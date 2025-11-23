import { Hero } from "@/components/home/Hero";
import { GrowthEngine } from "@/components/home/GrowthEngine";
import { TechStack } from "@/components/home/TechStack";
import { CodeTransformer } from "@/components/home/CodeTransformer";
import { Metrics } from "@/components/home/Metrics";
import { Testimonials } from "@/components/home/Testimonials";
import { GrowthCalculator } from "@/components/home/GrowthCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <GrowthEngine />
      <CodeTransformer />
      <TechStack />
      <GrowthCalculator />
      <Testimonials />
      <Metrics />
    </main>
  );
}
