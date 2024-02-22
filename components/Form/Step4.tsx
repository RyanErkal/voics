export default function Step4() {
	return (
		<>
			<h2 className="text-xl font-extrabold text-base-content/80 text-left mb-6">
				Let&apos;s talk money.
			</h2>
			<input
				placeholder="Do you currently spend any money on ads or marketing?text-sm lg:"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			<input
				placeholder="What is your monthly marketing budget? (If you have one)"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-md py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
		</>
	);
}
