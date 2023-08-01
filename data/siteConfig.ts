import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "https://avatars.githubusercontent.com/u/59317946?v=4",
  siteUrl: "https://hasani.id.ir",
  siteName: "Mohammad Hassani",
  siteDescription:
    "Tis is a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "https://hasani.id.ir/assets/bl33hIcon-01f3a8f7.png?raw=true",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "blog-home-page", href: "/" },
  ],
  social: {
    github: "https://github.com/mohammad-hassani",
    twitter: "https://twitter.com/Mistr_Mohandes",
    linkedin: "https://www.linkedin.com/in/mohammad-hassani-495b9117b/",
    instagram: "https://www.instagram.com/hassani_mohammad_mh/",
  },
};
export default siteConfig;
