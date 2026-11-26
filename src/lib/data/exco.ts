export type ExcoLinkType = "email" | "github" | "linkedin" | "instagram" | "website" | "x";

export type ExcoLink = {
  type: ExcoLinkType;
  url: string;
};

export type ExcoMember = {
  name: string;
  position: string;
  photoSrc?: string; // profile picture
  bio?: string; // very short text description
  links?: ExcoLink[];
};

export const excoMembers: ExcoMember[] = [
  {
    name: "Lam Tsz Hei",
    position: "Executive Director",
    links: [{ type: "linkedin", url: "https://www.linkedin.com/in/lam-tsz-hei-jacky" }],
    bio: "Aspiring Postgraduate Law Student",
  },
  {
    name: "Liu Chung Wing, Erwin",
    position: "Co-Executive Director",
  },
  {
    name: "Cheng Ho Ming",
    position: "Chief Technical Officer",
    links: [
      { type: "email", url: "eric310@connect.hku.hk" },
      { type: "github", url: "https://github.com/eric15342335" },
      { type: "linkedin", url: "https://www.linkedin.com/in/eric15342335/" },
      { type: "instagram", url: "https://www.instagram.com/ericcheng0310/" },
      { type: "x", url: "https://x.com/eric15342335/" },
      { type: "website", url: "https://eric15342335.github.io/" },
    ],
    bio: "Applied AI & Computer Science at HKU",
  },
];
