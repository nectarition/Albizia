import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    date: z.date(),
    showMenu: z.boolean().optional(),
    menuTitle: z.string().optional(),
    menuOrder: z.number().optional()
  })
})

export const collections = {
  "pages": pageCollection
}
