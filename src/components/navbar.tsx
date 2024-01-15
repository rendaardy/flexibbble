import Link from "next/link";

import { navLinks } from "#/constants.ts";
import AuthProviders from "./auth-providers.tsx";

export default function Navbar(): React.ReactElement {
	const session = null;

	return (
		<header className="flex-between navbar">
			<nav className="flex-1 flex-start gap-10">
				<Link href="/" aria-label="Home">
					<img src="/logo.svg" width={115} height={43} alt="Flexibbble" />
				</Link>
				<ul className="xl:flex hidden text-small gap-7">
					{navLinks.map((link) => (
						<li key={link.key}>
							<Link href={link.href}>{link.text}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex-center gap-4">
				{session ? (
					<>
						UserPhoto
						<Link href="/create-project">Share Work</Link>
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</header>
	);
}
