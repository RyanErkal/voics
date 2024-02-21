"use client";

import CountUp from "react-countup";

export default function StatsBanner() {
	return (
		<section className="bg-white py-8 flex flex-col items-center">
			<div className="max-w-7xl px-8 flex flex-col items-center justify-center text-center w-full">
				<div className="bg-[#ff8ba0] w-full rounded-lg px-8 py-20 drop-shadow-md">
					<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-10 lg:mb-20">
						The numbers don&apos;t lie.
					</h2>
					<div className="grid grid-cols-4 gap-6 w-full">
						<div className="flex flex-col gap-4 items-center justify-center text-center w-full">
							<h3 className="font-extrabold text-lg lg:text-4xl tracking-tight">
								<CountUp
									end={55000000}
									duration={3}
									enableScrollSpy={true}
								/>
							</h3>
							<p className="font-extrabold text-md lg:text-2xl tracking-tight">
								Views
							</p>
						</div>
						<div className="flex flex-col gap-4 items-center justify-center text-center w-full">
							<h3 className="font-extrabold text-lg lg:text-4xl tracking-tight">
								<CountUp
									end={10000000}
									duration={3}
									enableScrollSpy={true}
								/>
							</h3>
							<p className="font-extrabold text-md lg:text-2xl tracking-tight">
								Downloads
							</p>
						</div>
						<div className="flex flex-col gap-4 items-center justify-center text-center w-full">
							<h3 className="font-extrabold text-lg lg:text-4xl tracking-tight">
								<CountUp
									end={500}
									duration={3}
									enableScrollSpy={true}
								/>
							</h3>
							<p className="font-extrabold text-md lg:text-2xl tracking-tight">
								Episodes
							</p>
						</div>
						<div className="flex flex-col gap-4 items-center justify-center text-center w-full">
							<h3 className="font-extrabold text-lg lg:text-4xl tracking-tight">
								<CountUp
									end={30}
									duration={3}
									enableScrollSpy={true}
								/>
							</h3>
							<p className="font-extrabold text-md lg:text-2xl tracking-tight">
								Podcasts
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
