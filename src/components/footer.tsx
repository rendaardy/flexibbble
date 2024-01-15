import Link from "next/link";

import { footerLinks } from "#/constants.ts";

interface FooterColumnProps {
	title: string;
	links: Array<string>;
}

function FooterColumn({ title, links }: FooterColumnProps): React.ReactElement {
	return (
		<div className="footer-column">
			<h4 className="font-semibold">{title}</h4>
			<ul className="flex flex-col gap-2 font-normal">
				{links.map((link) => (
					<li key={link}>
						<Link href="/">{link}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer(): React.ReactElement {
	return (
		<footer className="flex-start footer">
			<div className="flex flex-col gap-12 w-full">
				<div className="flex flex-col items-start">
					<img
						src="/logo-purple.svg"
						width={115}
						height={38}
						alt="Flexibbble"
					/>
					<p className="text-start text-sm font-normal mt-5 max-w-xs">
						Flexibbble is the world's leading community for creatives to share,
						grow, and get hired.
					</p>
				</div>
				<div className="flex flex-wrap gap-12">
					<FooterColumn
						title={footerLinks.at(0)?.title ?? ""}
						links={footerLinks.at(0)?.links ?? []}
					/>
					<div className="flex-1 flex flex-col gap-4">
						<FooterColumn
							title={footerLinks.at(1)?.title ?? ""}
							links={footerLinks.at(1)?.links ?? []}
						/>
						<FooterColumn
							title={footerLinks.at(2)?.title ?? ""}
							links={footerLinks.at(2)?.links ?? []}
						/>
					</div>
					<FooterColumn
						title={footerLinks.at(3)?.title ?? ""}
						links={footerLinks.at(3)?.links ?? []}
					/>
					<div className="flex-1 flex flex-col gap-4">
						<FooterColumn
							title={footerLinks.at(4)?.title ?? ""}
							links={footerLinks.at(4)?.links ?? []}
						/>
						<FooterColumn
							title={footerLinks.at(5)?.title ?? ""}
							links={footerLinks.at(5)?.links ?? []}
						/>
					</div>
					<FooterColumn
						title={footerLinks.at(6)?.title ?? ""}
						links={footerLinks.at(6)?.links ?? []}
					/>
				</div>
			</div>
			<div className="flex-between footer-copyright">
				<p>&copy; 2024 Flexibbble. All rights reserved.</p>
				<p className="text-gray">
					<span className="text-black font-semibold">10,214</span> projects
					submitted.
				</p>
			</div>
		</footer>
	);
}
