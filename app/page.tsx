import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Clients from "@/components/Clients";
import Results from "@/components/Results";
import StatsBanner from "@/components/StatsBanner";
import Testimonials3 from "@/components/Testimonials3";
import Process from "@/components/Process";
import Form from "@/components/Form/Form";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Calendly from "@/components/Calendly";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export default function Page() {
	return (
		<>
			<Suspense>
				<Header />
			</Suspense>
			<Hero />
			<FeaturesAccordion />
			<Clients />
			<Results />
			<StatsBanner />
			<Testimonials3 />
			<Process />
			<Form />
			<Team />
			<Pricing />
			<Calendly />
			<Newsletter />
			<FAQ />
			<Footer />
		</>
	);
}
