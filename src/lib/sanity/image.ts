import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import type { SanityImage } from "@/types";

let _builder: ReturnType<typeof imageUrlBuilder> | null = null;

function getBuilder() {
  if (_builder) return _builder;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable"
    );
  }

  const client = createClient({ projectId, dataset, useCdn: true });
  _builder = imageUrlBuilder(client);
  return _builder;
}

export function urlFor(source: SanityImage) {
  return getBuilder().image(source);
}
