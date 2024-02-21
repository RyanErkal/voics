import Image from "next/image";
import client0 from "@/public/clients/client0.webp";
import client1 from "@/public/clients/client1.webp";
import client2 from "@/public/clients/client2.webp";
import client3 from "@/public/clients/client3.webp";
import client4 from "@/public/clients/client4.webp";
import client5 from "@/public/clients/client5.webp";
import client6 from "@/public/clients/client6.webp";
import client7 from "@/public/clients/client7.webp";
import client9 from "@/public/clients/client9.webp";
import client10 from "@/public/clients/client10.webp";
import Link from "next/link";

const clients = [
	{
		name: "CamBro Conversations",
		image: client0,
		link: "https://podcasts.apple.com/gb/podcast/cambro-conversations/id1505785131"
	},
	{
		name: "How to Sell - Master B2B Sales & Revenue Growth",
		image: client1,
		link: "https://podcasts.apple.com/nz/podcast/how-to-sell-master-b2b-sales-revenue-growth/id1444853887"
	},
	{
		name: "Rob Lipsett",
		image: client2,
		link: "https://www.youtube.com/@RobLipsett"
	},
	{
		name: "The Copyblogger Podcast",
		image: client3,
		link: "https://www.copybloggerpod.com/"
	},
	{
		name: "Experts of Experience",
		image: client4,
		link: "https://podcasts.apple.com/us/podcast/experts-of-experience/id1713550839"
	},
	{
		name: "The Digible Dudes",
		image: client5,
		link: "https://podcasts.apple.com/us/podcast/the-digible-dudes/id1501232603"
	},
	{
		name: "Rethink Investing",
		image: client6,
		link: "https://www.youtube.com/@rethinkinvesting6878/featured"
	},
	{
		name: "Mission Daily",
		image: client7,
		link: "https://podcasts.apple.com/us/podcast/mission-daily/id1382999024"
	},
	{
		name: "The AlphaMind Podcast",
		image: client9,
		link: "https://thealphamindpodcast.com/"
	},
	{
		name: "Stock Club",
		image: client10,
		link: "https://podcasts.apple.com/gb/podcast/stock-club/id1358756008"
	}
];

export default function Clients() {
	return (
		<section className="max-w-7xl mx-auto bg-white px-8 py-8 lg:py-20">
			<div className="flex flex-col gap-10 items-start justify-center text-left w-full">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
					Our Clients
				</h2>
				<p className="text-lg text-black/75 leading-relaxed">
					Real people, real results. We've helped hundreds of
					podcasters grow their audience and monetize their shows.
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full">
					{clients.map((client, index) => (
						<Link
							href={client.link}
							target="_blank"
							key={index}
							className="group ">
							<Image
								src={client.image}
								alt={client.name}
								key={index}
								placeholder="blur"
								height={200}
								width={200}
								className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out rounded-sm"
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
