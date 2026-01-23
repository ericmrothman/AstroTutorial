import { defineCollection, z } from 'astro:content'

const work = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		sort: z.number().default(99),
		title: z.string(),
		description: z.string(),
		year: z.coerce.date().optional(),
		role: z.string().optional(),
		collaborators: z.string().optional(),
		tags: z.array(z.string()).default(['misc']),
		videoLoop: z.string().optional(),
		bunnyVideoId: z.string().optional(),
	}),
})

export const collections = { work }
