import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Clients from "@/components/Clients";
import Results from "@/components/Results";
import StatsBanner from "@/components/StatsBanner";
import Testimonials3 from "@/components/Testimonials3";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<>
			<Header />
			<Hero />
			<FeaturesAccordion />
			<Clients />
			<Results />
			<StatsBanner />
			<Testimonials3 />
			<Process />
			<Team />
			<Pricing />
			<FAQ />
			{/* 
      Clients
      Results
      Testimonials
      Process
      Team
      Pricing
      FAQ
      */}
			<Footer />
		</>
	);
}
