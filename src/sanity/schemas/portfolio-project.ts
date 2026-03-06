const portfolioProject = {
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "platforms",
      title: "Platforms",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "TikTok", value: "tiktok" },
          { title: "YouTube", value: "youtube" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Twitter/X", value: "twitter" },
          { title: "Facebook", value: "facebook" },
        ],
      },
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "completedAt",
      title: "Completed At",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "image",
    },
  },
};

export default portfolioProject;
