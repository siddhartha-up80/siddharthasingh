export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Siddhartha Singh | My Inators Portfolio",
  description: "Siddhartha singh inators portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },

    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      target: "_blank",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },

    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: {
    github: "https://github.com/siddhartha-up80",
    twitter: "https://twitter.com/siddhartha_up80",
    instagram: "https://instagram.com/sid_up80",
  },
};
