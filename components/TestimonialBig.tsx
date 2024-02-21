import Image from "next/image";
import clientbig from "@/public/clientbig.png";

export default function TestimonialBig() {
	return (
		<section className="bg-white flex flex-col items-center">
			<div className="max-w-7xl flex flex-col items-center justify-center text-center w-full">
				<div className="bg-gray-100 w-full rounded-lg px-8 py-8 xl:py-16">
					<div className="grid grid-cols-1 xl:grid-cols-3 w-full">
						<div className="h-full flex items-center justify-center">
							<Image
								src={clientbig}
								alt="Client"
								height={300}
								width={300}
								className="rounded-full object-contain mb-8 xl:mb-0"
							/>
						</div>
						<div className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 justify-center gap-6 gap-x-10 text-base-content/80">
							<div className="flex flex-col justify-start text-left">
								<h3 className="font-bold">
									Attention to Detail
								</h3>
								<p className="text-sm">
									Voics&apos; editing skills are nothing short
									of brilliant. Their meticulous attention to
									detail, from taking care of the minute
									background noises to perfecting the
									transitions between different segments, has
									been exceptional. They have a knack for
									making every episode feel polished and
									professional.
								</p>
							</div>
							<div className="flex flex-col justify-start text-left">
								<h3 className="font-bold">
									Operational Efficiencies
								</h3>
								<p className="text-sm">
									When it comes to operations, Voics shines
									just as brightly. They took the onus of
									managing the technical aspect entirely,
									leaving us free to focus on creating
									compelling content. Their streamlined
									process, timely updates, and prompt delivery
									ensured a smooth operation from start to
									finish.
								</p>
							</div>
							<div className="flex flex-col justify-start text-left">
								<h3 className="font-bold">
									Operational Efficiencies
								</h3>
								<p className="text-sm">
									When it comes to operations, Voics shines
									just as brightly. They took the onus of
									managing the technical aspect entirely,
									leaving us free to focus on creating
									compelling content. Their streamlined
									process, timely updates, and prompt delivery
									ensured a smooth operation from start to
									finish.
								</p>
							</div>
							<div className="flex flex-col justify-start text-left">
								<h3 className="font-bold">
									Operational Efficiencies
								</h3>
								<p className="text-sm">
									When it comes to operations, Voics shines
									just as brightly. They took the onus of
									managing the technical aspect entirely,
									leaving us free to focus on creating
									compelling content. Their streamlined
									process, timely updates, and prompt delivery
									ensured a smooth operation from start to
									finish.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
