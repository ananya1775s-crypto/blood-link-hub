import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { RequestForm } from "@/components/RequestForm";
import { DonorTable } from "@/components/DonorTable";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsGrid />
        <RequestForm />
        <DonorTable />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
