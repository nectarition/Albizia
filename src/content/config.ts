import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    date: z.date(),
    isMetaPage: z.boolean().optional(),
    showMenu: z.boolean().optional(),
    menuTitle: z.string().optional(),
    menuOrder: z.number().optional(),
    menuIcon: z.string().optional(),
    menuSection: z.array(
      z.object({
        name: z.string(),
        path: z.string(),
        backgroundImage: z.string()
      }))
      .optional(),
  })
})

export const collections = {
  "pages": pageCollection
}
