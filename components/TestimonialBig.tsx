import Image from "next/image";
import clientbig from "@/public/clientbig.png";

export default function TestimonialBig() {
	return (
		<section className="bg-white flex flex-col items-center">
			<div className="max-w-7xl flex flex-col items-center justify-center text-center w-full">
				<div className="bg-gray-100 w-full rounded-lg px-8 py-8 lg:py-16">
					<div className="grid grid-cols-1 lg:grid-cols-4 w-full">
						<div className="h-full w-full flex flex-col items-center justify-center mb-12 lg:mb-0">
							<Image
								src={clientbig}
								alt="Client"
								height={200}
								width={200}
								className="rounded-full"
							/>
							<figcaption className="relative w-fit flex items-center justify-start gap-4 pt-4 ml-6 lg:ml-0 mt-4  lg:border-t lg:border-base-content/5">
								<div className="w-full flex flex-col items-center justify-center gap-2">
									<div className="flex flex-col items-center lg:items-start">
										<div className="font-bold text-base-content/80 md:mb-0.5 w-full text-center lg:text-left">
											David Fastuca
										</div>

										<div className="mt-0.5 text-sm text-base-content/80 mb-2 w-full text-center lg:text-left">
											How To Sell - Top 1.5% Podcast
										</div>

										<div className="flex">
											{[...Array(5)].map((_, i) => (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-5 h-5 text-yellow-500"
													key={i}>
													<path
														fillRule="evenodd"
														d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
														clipRule="evenodd"
													/>
												</svg>
											))}
										</div>
									</div>
								</div>
							</figcaption>
						</div>
						<div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 gap-x-10 text-base-content/80">
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
