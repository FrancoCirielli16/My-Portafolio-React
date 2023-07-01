import "../../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { dir } from 'i18next'

const languages = ['en', 'es']

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
	title: {
		default: "Cirielli.com",
		template: "%s | Cirielli.com",
	},
	description: "Backend developer",
	openGraph: {
		title: "Cirielli.com",
		description:
			"Backend developer",
		url: "https://Cirielli.com",
		siteName: "Cirielli.com",
		images: [
			{
				url: "../public/portfolio-banner.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: { icon: { url: "/favicon.png", type: "image/png" }, shortcut: { url: "/favicon.png", type: "image/png" }, }
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
	params: {
		lng
	}
}: {
	children: React.ReactNode,
	params:{lng:string}

}) {
	return (
		<html lang={lng} dir={dir(lng)} className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				{children}
			</body>
		</html>
	);
}
