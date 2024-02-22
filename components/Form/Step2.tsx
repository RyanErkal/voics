export default function Step2() {
	return (
		<>
			<h2 className="text-xl font-extrabold text-base-content/80 text-left mb-6">
				A bit about your business.
			</h2>
			<input
				placeholder="Business Name"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>

			<input
				placeholder="Industry"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>

			<input
				placeholder="How many employees do you have?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>

			<input
				placeholder="What is your annual revenue?"
				type="text"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
		</>
	);
}
