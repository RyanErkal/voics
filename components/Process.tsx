const process = [
	{
		title: "Podcast Strategy",
		description:
			"We help you define your podcast strategy, select the right equipment, lay out your episodes and pick the right recording platform."
	},
	{
		title: "Graphic Design",
		description:
			"We professionally curate every thumbnail and cover art, so you consistently stay ahead of the curve. Say goodbye to cheesy images."
	},
	{
		title: "Project Management",
		description:
			"There's a lot of moving parts to a podcast. We handle your release schedule of new episodes and content strategy so you don't miss a beat. "
	},
	{
		title: "Growth Marketing",
		description:
			"Maximise content potential with our expert repurposing, scaling, and SEO optimisation. Reach wider audiences and outrun competitors."
	},
	{
		title: "File Management",
		description:
			"Managing multiple podcast files can be messy. We streamline the entire process to make it as seamless as possible to view your episodes. "
	},
	{
		title: "Monetisation",
		description:
			"We turn your podcast into a profitable business by leveraging your brand. For product and service businesses, anything is possible. "
	}
];

export default function Process() {
	return (
		<section id="process">
			<div className="py-24 px-8 max-w-7xl w-full mx-auto flex flex-col justify-start gap-10 text-base-content/80">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight -mb-4">
					How Do We Do It?
				</h2>
				<p className="text-lg  leading-relaxed">
					We have a proven process that helps you create, market and
					grow your podcast. We take care of everything from start to
					finish.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{process.map((item, index) => (
						<div
							key={index}
							className="relative flex flex-col justify-start text-left bg-gray-100 p-6 rounded-lg">
							<div className="absolute top-0 right-0 w-8 h-8 m-2 bg-[#ff8ba0] text-white rounded-full font-bold text-xl flex items-center justify-center drop-shadow-sm">
								{index + 1}
							</div>

							<h3 className="font-bold mb-2 text-xl">
								{item.title}
							</h3>
							<p className="">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
