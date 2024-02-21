import { ReactNode } from "react";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

export const viewport: Viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: "#ff8ba0",
	width: "device-width",
	initialScale: 1
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" data-theme={config.colors.theme}>
			{config.domainName && (
				<head>
					<PlausibleProvider domain={config.domainName} />
					<meta content="text/html; charset=utf-8" />
					<link rel="icon" href="/favicon.ico" sizes="any" />
					<link
						rel="icon"
						href="/icon.png"
						type="image/<generated>"
						sizes="<generated>"
					/>
					<link
						rel="apple-icon"
						href="/apple-icon.png"
						type="image/<generated>"
						sizes="<generated>"
					/>
				</head>
			)}
			<body>
				{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
