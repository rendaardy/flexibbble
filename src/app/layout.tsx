import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "#/components/footer.tsx";
import Navbar from "#/components/navbar.tsx";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Flexibbble",
	description: "Showcase and discover remarkable developer projects.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
