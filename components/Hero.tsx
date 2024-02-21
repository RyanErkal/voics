import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import Link from "next/link";
import hero1 from "@/public/hero1.webp";

const Hero = () => {
	return (
		<section className="max-w-7xl mx-auto bg-white flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
			<div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
				<h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
					Build your influence and authority today
				</h1>
				<p className="text-lg text-black/75 leading-relaxed">
					Create a scalable personal brand and grow your authority
					through podcasting. Voics is a podcast media company that
					creates, markets and grows your podcast.
				</p>
				<Link
					href="#form"
					className="btn btn-wide bg-white border-2 border-black rounded-md  hover:bg-[#ff8ba0] hover:border-[#ff8ba0] hover:text-white transition-all ease-in-out duration-300">
					Get Started
				</Link>

				<TestimonialsAvatars priority={true} />
			</div>
			<div className="lg:w-full hidden lg:block">
				<Image
					src={hero1}
					alt="Product Demo"
					className="w-full"
					priority={true}
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
};

export default Hero;
