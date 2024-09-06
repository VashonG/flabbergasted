import { defineCollection, z } from "astro:content";
const store = defineCollection({
  schema: z.object({
    title: z.string(),
    price: z.number(),
    preview: z.string(),
    checkout: z.string(),
    license: z.string(),
    highlights: z.array(z.string()),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const integrations = defineCollection({
  schema: z.object({
    integration: z.string(),
    description: z.string(),
    email: z.string(),
    permissions: z.array(z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const jobs = defineCollection({
  schema: z.object({
    page: z.string(),
    details: z.record(z.string()),
  }),
});
const helpcenter = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
  }),
});
const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const customers = defineCollection({
  schema: z.object({
    customer: z.string(),
    feedback: z.string(),
    about: z.string(),
    details: z.record(z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const changelog = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional(),
  }),
});
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });
export const collections = {
  store: store,
  integrations: integrations,
  jobs: jobs,
  helpcenter: helpcenter,
  team: team,
  customers: customers,
  changelog: changelog,
  posts: postsCollection,
  infopages: infopages,
};