import themes from "daisyui/src/theming/themes.js";
import { ConfigProps } from "./types/config";

const config = {
	// REQUIRED
	appName: "Voics - We Make Growing B2B Podcasts Easy",
	// REQUIRED: a short description of your app for SEO tags (can be overwritten)
	appDescription:
		"What starts in your imagination comes to life in your podcast. Voics is a Podcast-as-a-Service company (PaaS) that creates, markets and scales your B2B podcast. We launch your podcast with no delays and manage the boring parts of creating episodes. Sit back and let you the professionals run your show.",
	// REQUIRED (no https://, not trialing slash at the end, just the naked domain)
	domainName: "voics.co",
	crisp: {
		// Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
		id: "",
		// Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
		onlyShowOnRoutes: ["/"]
	},
	stripe: {
		// Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
		plans: [
			{
				// REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
				priceId:
					process.env.NODE_ENV === "development"
						? "price_1Niyy5AxyNprDp7iZIqEyD2h"
						: "price_456",
				//  REQUIRED - Name of the plan, displayed on the pricing page
				name: "Professional",
				// A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
				description: "Perfect for small businesses and startups",
				// The price you want to display, the one user will be charged on Stripe.
				price: 3450,
				// If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
				priceAnchor: 4000,
				features: [
					{
						name: "2 podcasts per month"
					},
					{ name: "2 show notes" },
					{ name: "8 marketing clips & posts" },
					{ name: "2 episode thumbnails" },
					{ name: "1 monthly consultation" },
					{ name: "2 transcripts and newsletters" },
					{ name: "1 content review" },
					{ name: "1 member access to Podcast University" }
				]
			},
			{
				priceId:
					process.env.NODE_ENV === "development"
						? "price_1O5KtcAxyNprDp7iftKnrrpw"
						: "price_456",
				// This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
				isFeatured: true,
				name: "Enterprise",
				description: "For businesses that need more",
				price: 4950,
				priceAnchor: 6500,
				features: [
					{
						name: "Unlimited podcasts per month"
					},
					{ name: "Unlimited show notes" },
					{ name: "Unlimited marketing clips & posts" },
					{ name: "Unlimited episode thumbniails" },
					{ name: "2 monthly consultation" },
					{ name: "4 transcripts and newsletters" },
					{ name: "3 content review" },
					{ name: "4 member access to Podcast University" }
				]
			}
		]
	},
	aws: {
		// If you use AWS S3/Cloudfront, put values in here
		bucket: "bucket-name",
		bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
		cdn: "https://cdn-id.cloudfront.net/"
	},
	mailgun: {
		// subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
		subdomain: "mg",
		// REQUIRED — Email 'From' field to be used when sending magic login links
		fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
		// REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
		fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
		// Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
		supportEmail: "marc@mg.shipfa.st",
		// When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
		forwardRepliesTo: "marc.louvion@gmail.com"
	},
	colors: {
		// REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
		theme: "light",
		// REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
		// OR you can just do this to use a custom color: main: "#f37055". HEX only.
		main: themes[`[data-theme=light]`]["primary"]
	},
	auth: {
		// REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
		loginUrl: "/api/auth/signin",
		// REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
		callbackUrl: "/dashboard"
	}
} as ConfigProps;

export default config;
