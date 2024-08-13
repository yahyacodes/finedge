import Benefits from "@/components/benefits";
import DownloadApp from "@/components/download-app";
import Faqs from "@/components/faqs";
import Features from "@/components/features";
import PageFooter from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Faqs />
      <DownloadApp />
      <PageFooter />
    </main>
  );
}
