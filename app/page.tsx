import { Header } from "@/components/layout/header";
import { FeaturesGrid } from "@/components/features/features-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow">
        <Header />
        <FeaturesGrid />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}