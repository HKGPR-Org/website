export type Partner = {
  name: string;
  href: string;
  logo?: string;
  logoClassName?: string;
};

export const partners: Partner[] = [
  {
    name: "ALPHA Education",
    href: "https://www.alphaeducation.org",
    logo: "/partners/alpha-education.png",
    logoClassName: "h-16 w-40",
  },
  {
    name: "WongAvery Asia Pacific Peace Museum",
    href: "https://www.asiapacificpeacemuseum.com",
    logo: "/partners/wongavery-appm.png",
    logoClassName: "h-16 w-48",
  },
];
