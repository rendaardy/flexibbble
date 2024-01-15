import { config, connector, graph } from "@grafbase/sdk";

const g = graph.Standalone();

g.type("Project", {
	title: g.string(),
	description: g.string().optional(),
	image: g.url(),
	liveSiteUrl: g.url(),
	githubUrl: g.url(),
	category: g.string(),
	createdBy: g.ref("User"),
});

g.type("User", {
	name: g.string(),
	email: g.email(),
	avatarUrl: g.url(),
	description: g.string().optional(),
	githubUrl: g.url().optional(),
	linkedinUrl: g.url().optional(),
	projects: g.ref("Project").list().optional(),
});

const pg = connector.Postgres("pg", { url: g.env("DATABASE_URL") });

g.datasource(pg);

export default config({
	graph: g,
	// Authentication - https://grafbase.com/docs/auth
	auth: {
		// OpenID Connect
		// const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
		// providers: [oidc],
		rules: (rules) => {
			rules.public();
		},
	},
	// Caching - https://grafbase.com/docs/graphql-edge-caching
	// cache: {
	//   rules: [
	//     {
	//       types: ['Query'], // Cache everything for 60 seconds
	//       maxAge: 60,
	//       staleWhileRevalidate: 60
	//     }
	//   ]
	// }
});
