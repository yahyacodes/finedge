import Benefits from "@/components/benefits";
import Features from "@/components/features";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Header />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Features />
        <Benefits />
      </div>
    </main>
  );
}
