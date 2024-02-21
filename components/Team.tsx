import Image from "next/image";
import Link from "next/link";
import team1 from "@/public/team/team1.webp";
import team2 from "@/public/team/team2.webp";
import team3 from "@/public/team/team3.webp";
import team4 from "@/public/team/team4.webp";

const team = [
	{
		name: "Darren Lee",
		title: "Founder & CEO",
		img: team1,
		linkedin: "https://www.linkedin.com/in/darren-lee1/",
		youtube: "https://www.youtube.com/@Darren_ks",
		spotify: "https://open.spotify.com/show/3Ls5k8S8UuAwYvNfYj2wvO"
	},
	{
		name: "Somu Mahapatra",
		title: "Head of Design",
		img: team2,
		linkedin: "https://www.linkedin.com/in/kalyan-mahapatra-b5384620b/"
	},
	{
		name: "Zeshan Haider",
		title: "Head of Production",
		img: team3,
		linkedin: "https://www.linkedin.com/in/zeshan-haider-0b55058b/"
	},
	{
		name: "Piyush Sharma",
		title: "Head of Operations",
		img: team4,
		linkedin: "https://www.linkedin.com/in/piyush-sharma-232311173/"
	}
];

export default function Team() {
	return (
		<section className="bg-white py-8 flex flex-col items-center">
			<div className="max-w-7xl px-8 flex flex-col items-center justify-center text-center w-full">
				<div className="bg-[#ff8ba0] w-full max-w-md md:max-w-2xl lg:max-w-full rounded-lg px-8 py-20 drop-shadow-md">
					<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12">
						Meet the team.
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-12 lg:gap-6 w-full">
						{team.map((member, index) => (
							<div
								key={index}
								className="flex flex-col gap-2 items-center justify-center text-center w-full text-base-content/80">
								<Image
									src={member.img}
									alt={member.name}
									height={200}
									width={200}
									className="object-cover rounded-full"
								/>
								<h3 className="font-extrabold text-xl tracking-tight">
									{member.name}
								</h3>
								<p className="font-extrabold text-md tracking-tight">
									{member.title}
								</p>
								<div className="flex gap-2">
									<Link
										href={member.linkedin}
										target="_blank"
										rel="noreferrer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="hover:text-white text-base-content/80 cursor-pointer transition-all ease-in-out duration-300">
											<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
										</svg>
									</Link>
									{member.youtube && (
										<Link
											href={member.youtube}
											target="_blank"
											rel="noreferrer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												x="0px"
												y="0px"
												width="40"
												height="40"
												fill="currentColor"
												viewBox="0 0 50 50"
												className="hover:text-white text-base-content/80 cursor-pointer transition-all ease-in-out duration-300">
												<path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
											</svg>
										</Link>
									)}
									{member.spotify && (
										<Link
											href={member.spotify}
											target="_blank"
											rel="noreferrer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												x="0px"
												y="0px"
												width="40"
												height="40"
												fill="currentColor"
												viewBox="0 0 50 50"
												className="hover:text-white text-base-content/80 cursor-pointer transition-all ease-in-out duration-300">
												<path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
											</svg>
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
