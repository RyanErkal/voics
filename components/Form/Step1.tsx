export default function Step1() {
	return (
		<>
			<h2 className="text-xl font-extrabold text-base-content/80 text-left mb-6">
				A bit about you.
			</h2>
			<input
				placeholder="Name"
				type="text"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-base py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>

			<input
				placeholder="Email"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-base py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>

			<input
				placeholder="Phone Number"
				type="text"
				className="bg-white focus:ring-transparent focus:outline-none focus:border-[#ff8ba0] border-b-2 border-gray-100 text-sm lg:text-base py-2 transition-all ease-in-out duration-300 w-full mb-2  rounded-none"
			/>
		</>
	);
}
