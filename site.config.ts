/**
 * Scholar Pages - primary configuration
 *
 * Start here for identity, profile, links, and page introductions.
 * Publications, CV records, projects, courses, and posts live in src/data
 * and src/content so this file stays quick to scan.
 */
import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	// Required: the four values most sites should personalize first.
	author: "Neuro-Symbolic Compliance Assistant for Design Reviews.",
	siteUrl: "https://neuscad.github.io",
	hero: {
		headline:
			"Compliance Verification of Early Design with LLM Power and Symbolic Verification Soundness.",
		subheadline:
			"NeuSCAD is an verification environment capable of extracting certification information from early design documents and verify this information against formal compliance verification plans.",
		profileImage: "/neuro-symbolic-head.svg",
		profileAlt: "Abstract illustration representing the fictional researcher Mira Latticewell",
		statusBadge: "NeuSCAD",
	},

	// Common profile and discovery settings.
	description:
		"Combining Scalability of GenAI with soundness of formal verification.",
	keywords: [
		"Method of Compliance Contracts",
		"Compliance Constraint Satisfaction",
		"SMT",
		"LLM",
	],
	// Optional social-preview overrides:
	// language: "en",
	// locale: "en_US",
	// ogImage: "/social-card.png", // Prefer a 1200 × 630 raster image.
	// ogImageAlt: "Scholar name - academic portfolio",
	// ogImageWidth: 1200,
	// ogImageHeight: 630,
	affiliations: [
		{
			role: "Automating Early Design Compliance",
			department: "LLM",
			institution: "SMT Verification",
		},
	],
	researchInterests: [
		"Neuro-Symbolic Verification",
		"LLM Assisted Software Development",
		"Sound Gen AI",
		"Fast, Scalable, Trustworthy Development",
	],
	socialLinks: [
		{
			label: "Repository (TBD)",
			href: "",
			icon: "i-mdi:github",
		},
	],

	// Footer display: links are hidden by default for a quieter academic layout.
	footer: {
		showProfileLinks: false, // Set true to show the social links above in the footer.
		showAuthor: true, // Set false to show the copyright line without the author name.
	},

	// Optional: omit any entry to use the concise academic default copy.
	pageTitles: {
		researches: {
			title: "Publications",
			description:
				"Publications.",
		},
		projects: {
			title: "Demos",
			description:
				"Project Demos.",
		},
		posts: {
			description:
				"Fictional note.",
		},
	},

	navLinks: [
		{ href: "/researches", label: "Publications" },
		{ href: "/projects", label: "Demos" },
		{ href: "/posts", label: "Blog" },
	],

	// Homepage composition: switch off any block you do not want to display.
	homeBlocks: {
		hero: { enabled: true },
		showcase: {
			enabled: true,
			title: "Demos (TBD)",
			description: "Demos (TBD)",
		},
		publications: {
			enabled: true,
			description: "Publications (TBD)",
		},
		posts: { enabled: true, description: "Publications" },
	},
});

export default siteConfig;
