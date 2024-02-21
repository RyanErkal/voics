import Image from "next/image";
import result1 from "@/public/results/result1.webp";

export default function Testimonials() {
	return (
		<section className="max-w-7xl mx-auto bg-white px-8 py-8 lg:py-20">
			<div className="flex flex-col gap-10 items-center justify-center text-center w-full">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
					What Our Clients Have to Say
				</h2>
				<p className="text-lg text-black/75 leading-relaxed">
					Don&apos;t just take our word for it.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
					<div className="flex flex-col gap-4 items-center justify-center text-center w-full">
						<Image
							src={result1}
							alt="result1"
							height={200}
							width={200}
							className="object-cover w-full h-full rounded-sm"
						/>
						<p className="text-lg text-black/75 leading-relaxed">
							"I was skeptical at first, but after just a few
							weeks, I was seeing results. I can't believe how
							much better I feel."
						</p>
						<p className="text-lg text-black/75 leading-relaxed">
							- John Doe
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
