"use client";

import { InlineWidget } from "react-calendly";

export default function Call() {
	return (
		<div
			id="call"
			className="w-full flex flex-col items-center bg-white text-base-content/80 px-8 py-16 overflow-hidden">
			<div className="w-full max-w-7xl flex flex-col items-center justify-start">
				<h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12">
					Chat with us.
				</h2>
				<div className="w-full xl:w-[600px] border-2">
					<InlineWidget url="https://calendly.com/voicsagency/30min?month=2024-02?hide_gdpr_banner=1" />
				</div>
			</div>
		</div>
	);
}
