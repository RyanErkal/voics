export default function Step3() {
	return (
		<>
			<h2 className="text-xl font-extrabold text-base-content/80 text-left mb-6">
				Now to the podcast stuff.
			</h2>
			<input
				placeholder="How many episodes have you released?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<input
				placeholder="How many downloads do you get per episode?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<input
				placeholder="What is the average length of an episode?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<input
				placeholder="What platforms do you use to promote your podcast?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<textarea
				rounded-none
				placeholder="Tell me about your studio setup and the equipment you use."
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<textarea
				rounded-none
				placeholder="What are your goals for your podcast?"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
		</>
	);
}
