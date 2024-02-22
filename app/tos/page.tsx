import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
	title: `Terms and Conditions | ${config.appName}`,
	canonicalUrlRelative: "/tos"
});

const TOS = () => {
	return (
		<main className="max-w-xl mx-auto">
			<div className="p-5">
				<Link href="/" className="btn btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5">
						<path
							fillRule="evenodd"
							d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
							clipRule="evenodd"
						/>
					</svg>
					Back
				</Link>
				<h1 className="text-3xl font-extrabold pb-6">
					Terms and Conditions for {config.appName}
				</h1>

				<pre
					className="leading-relaxed whitespace-pre-wrap"
					style={{ fontFamily: "sans-serif" }}>
					{`Effective Date: February 22, 2024

Welcome to Voics, located at https://voics.vercel.app ("Website"). These Terms of Service ("Terms") govern your use of our Podcast-as-a-Service (PaaS) offerings, which are designed to create, market, and scale your B2B podcast. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.

1. Services Offered
Voics provides podcast creation, marketing, and management services on a subscription basis. We take care of the technical and marketing aspects, allowing you to focus on content creation.

2. Subscription
Access to certain services requires a subscription. Subscribers are responsible for the subscription fees, which are disclosed at the time of subscription.

3. User Data
We collect personal data such as name, email, and payment information for subscription and service provision purposes. Our use of your data is governed by our Privacy Policy.

4. Non-Personal Data Collection
We use web cookies to improve user experience and service delivery. By using our Website, you consent to our use of cookies as described in our Privacy Policy.

5. Intellectual Property
All content provided by Voics, including but not limited to graphics, logos, and service marks, is the property of Voics and protected by copyright and intellectual property laws. You may not use such content without our prior written permission.

6. User Conduct
Users are expected to use the Website and services in a lawful manner. Any use of the service for illegal activities is strictly prohibited.

7. Termination
Voics reserves the right to terminate your subscription or access to the Website for breach of these Terms.

8. Governing Law
These Terms shall be governed by the laws of the United Kingdom. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the UK courts.

9. Updates to the Terms
Voics reserves the right to update these Terms at any time. We will notify users of any changes by email. Your continued use of the Website after such changes constitutes your agreement to the new Terms.

10. Contact Us
For any questions or concerns regarding these Terms, please contact us at [EMAIL].

By accessing or using our Website and services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.`}
				</pre>
			</div>
		</main>
	);
};

export default TOS;
