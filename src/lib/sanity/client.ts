import { createClient, type QueryParams } from "@sanity/client";

let _client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (_client) return _client;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable"
    );
  }

  _client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: true,
  });

  return _client;
}

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T> {
  const client = getClient();
  return client.fetch<T>(query, params ?? {});
}

// GROQ Queries
export const queries = {
  featuredProjects: `*[_type == "portfolioProject" && isFeatured == true] | order(completedAt desc) {
    _id, title, slug, client, description, platforms, image, tags, isFeatured, completedAt
  }`,

  allProjects: `*[_type == "portfolioProject"] | order(completedAt desc) {
    _id, title, slug, client, description, platforms, image, gallery, tags, isFeatured, completedAt
  }`,

  teamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id, name, role, bio, photo, order, socialLinks
  }`,
};
