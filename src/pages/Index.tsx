import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SimulationDashboard from "@/components/SimulationDashboard";
import FeaturesShowcase from "@/components/FeaturesShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="simulados">
          <SimulationDashboard />
        </div>
        <FeaturesShowcase />
      </main>
    </div>
  );
};

export default Index;
