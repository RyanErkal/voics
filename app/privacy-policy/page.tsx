import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
	title: `Privacy Policy | ${config.appName}`,
	canonicalUrlRelative: "/privacy-policy"
});

const PrivacyPolicy = () => {
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
					</svg>{" "}
					Back
				</Link>
				<h1 className="text-3xl font-extrabold pb-6">
					Privacy Policy for {config.appName}
				</h1>

				<pre
					className="leading-relaxed whitespace-pre-wrap"
					style={{ fontFamily: "sans-serif" }}>
					{`Effective Date: February 22, 2024

Welcome to Voics, located at https://voics.vercel.app ("Website"). This Privacy Policy outlines how we collect, use, protect, and handle your personal information as you use our Website and services. By using our Website, you agree to the collection and use of information in accordance with this policy.

1. Information Collection
We collect personal information such as your name, email address, and payment information when you subscribe to our services. This information is essential for order processing and service provision.

2. Non-Personal Data Collection
We use cookies on our Website to enhance your user experience and analyze site usage. These web cookies do not collect personal information.

3. Purpose of Data Collection
The collected personal data is used for order processing, providing our services, and communicating with you regarding your subscription and our services.

4. Data Sharing
Voics does not share your personal data with any third parties, except as required by law.

5. Children's Privacy
Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without verification of parental consent, we take steps to remove that information from our servers.

6. Security
We are committed to ensuring the security of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.

7. Updates to the Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and informing you via email. You are advised to review this Privacy Policy periodically for any changes.

8. Contact Us
If you have any questions about this Privacy Policy, please contact us at [EMAIL].

By using our Website, you consent to the collection and use of information in accordance with this Privacy Policy.`}
				</pre>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
