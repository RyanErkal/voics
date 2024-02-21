import Image from "next/image";
import result1 from "@/public/results/result1.webp";
import result2 from "@/public/results/result2.webp";
import result3 from "@/public/results/result3.webp";
import result4 from "@/public/results/result4.webp";

export default function Results() {
	return (
		<section className="max-w-7xl mx-auto bg-white px-8 py-8 lg:py-20">
			<div className="flex flex-col gap-10 items-start justify-center text-left w-full">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
					Results
				</h2>
				<p className="text-lg text-black/75 leading-relaxed">
					Instead of telling you, we&apos;d prefer to show you.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
					<Image
						src={result1}
						alt="result1"
						height={200}
						width={300}
						className="object-cover w-full h-full rounded-lg"
					/>
					<Image
						src={result2}
						alt="result2"
						height={200}
						width={300}
						className="object-cover w-full h-full rounded-lg"
					/>
					<Image
						src={result3}
						alt="result3"
						height={200}
						width={300}
						className="object-cover w-full h-full rounded-lg"
					/>
					<Image
						src={result4}
						alt="result4"
						height={200}
						width={300}
						className="object-cover w-full h-full rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
}
