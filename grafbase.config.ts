import { config, graph } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const project = g.type("Project", {
	title: g.string().length({ min: 3 }),
	description: g.string().optional(),
	image: g.url(),
	liveSiteUrl: g.url(),
	githubUrl: g.url(),
	category: g.string().search(),
	createdBy: g.ref("User"),
});

const user = g.type("User", {
	name: g.string().length({ min: 2, max: 20 }),
	email: g.email().unique(),
	avatarUrl: g.url(),
	description: g.string().optional(),
	githubUrl: g.url().optional(),
	linkedinUrl: g.url().optional(),
	projects: g.ref(project).list().optional(),
});

// Data Sources - https://grafbase.com/docs/connectors
//
// const pg = connector.Postgres('pg', { url: g.env('DATABASE_URL') })
// g.datasource(pg)

// Resolvers - https://grafbase.com/docs/resolvers
//
// g.query('helloWorld', {
//   returns: g.string(),
//   resolver: 'hello-world',
// })

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
