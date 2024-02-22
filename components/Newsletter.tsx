export default function Newsletter() {
	return (
		<section className="bg-white overflow-hidden" id="newsletter">
			<div className="py-16 px-8 max-w-7xl mx-auto text-base-content/80">
				<div className="flex flex-col w-full">
					<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
						Not sure yet? Sign up for our newsletter.
					</h2>
					<div className="flex flex-col max-w-xl w-full gap-4 mt-8">
						<input
							placeholder="Email"
							type="text"
							className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
						/>
						<button className="btn btn-wide hover:bg-[#ff8ba0] hover:border-[#ff8ba0] hover:text-white transition-all ease-in-out duration-300">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
