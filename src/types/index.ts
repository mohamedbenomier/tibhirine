export type Locale = "fr" | "en" | "ar";

export type NavLinkItem = {
  href: string;
  label: string;
};

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    gallery: string;
    athletes: string;
    results: string;
    partners: string;
    register: string;
    registerNow: string;
  };
  hero: {
    badge: string;
    title: string;
    location: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  raceInfo: {
    title: string;
    distance: string;
    description: string;
    rulesTitle: string;
    rules: string[];
  };
  common: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  footer: {
    text: string;
  };
};