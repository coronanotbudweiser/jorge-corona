export interface PortfolioProject {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  description: string;
  platforms: string[];
  image: SanityImage;
  gallery: SanityImage[];
  tags: string[];
  isFeatured: boolean;
  completedAt: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo: SanityImage;
  order: number;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}
