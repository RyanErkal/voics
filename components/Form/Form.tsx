"use client";

import React from "react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function Form() {
	const [step, setStep] = useState<number>(1);

	function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (step === 5) {
			console.log("submitted");
		} else {
			setStep(step + 1);
		}
	}

	return (
		<section id="form">
			<div className="py-16 px-8 max-w-7xl w-full mx-auto flex flex-col justify-start gap-10 text-base-content/80">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight -mb-4">
					Let&apos;s See What We Can Do For You.
				</h2>
				<div className="w-full flex items-start justify-start">
					<form className="w-full max-w-xl">
						{step === 1 ? (
							<Step1 />
						) : step === 2 ? (
							<Step2 />
						) : step === 3 ? (
							<Step3 />
						) : step === 4 ? (
							<Step4 />
						) : (
							<>
								<h2 className="text-4xl font-extrabold text-base-content/80 mb-6">
									Thank you!
								</h2>
								<p>We&apos;ll be in touch shortly</p>
							</>
						)}
						<button
							onClick={handleNext}
							className={`btn btn-wide hover:bg-[#ff8ba0] hover:border-[#ff8ba0] hover:text-white transition-all ease-in-out duration-300 mt-6 ${
								step === 5 && "hidden"
							}`}>
							{step === 4 ? "Submit" : "Next"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
