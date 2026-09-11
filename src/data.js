import jcsgoHome from "./assets/jcsgo-home.jpg";
import seedDome from "./assets/seed-dome.jpg";
import requestPortal from "./assets/request-portal.png";
import declareImg from "./assets/declare.png";
import rentalImg from "./assets/rental.png";
import akeriusImg from "./assets/akeriussms.jpg";

export const stats = [
  { num: "6", label: "public systems shipped", big: true },
  { num: "5", label: "church buildings covered" },
  { num: "40", label: "bookable rooms tracked" },
  { num: "1", label: "Postgres constraint, zero conflicts" },
];

export const techStack = [
  "Astro",
  "Next.js 16",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "GitHub Actions",
  "Capacitor",
  "Kotlin",
  "JWT Auth",
  "WordPress REST API",
];

export const projects = [
  {
    id: "jcsgo",
    kicker: "Headless website",
    title: "jcsgo.org",
    image: jcsgoHome,
    description:
      "An Astro frontend pulling content from a WordPress backend over the REST API. Deploys itself via GitHub Actions to Hostinger.",
    chips: ["Astro", "WordPress REST API", "GitHub Actions"],
    link: "https://jcsgo.org",
  },
  {
    id: "seed-dome",
    kicker: "Public booking site",
    title: "JCSGO SEED DOME",
    image: seedDome,
    description:
      "Public booking page for the church's indoor basketball court. Real-time availability, GCash payment, no phone calls needed.",
    chips: ["Next.js", "PostgreSQL", "Real-time availability"],
    link: "https://jcsgo.org/basketball-court/",
  },
  {
    id: "declare",
    kicker: "Volunteer scheduling",
    title: "Declare",
    image: declareImg,
    description:
      "Service planning and volunteer scheduling: who's rostered, who's confirmed, and who still needs a reminder before Sunday.",
    chips: ["Next.js", "Volunteer scheduling"],
    link: "https://declare-cyan.vercel.app",
  },
  {
    id: "rental",
    kicker: "Property management",
    title: "Rental Manager",
    image: rentalImg,
    description:
      "Property management for Faith Desiree Property Rentals: occupancy, rent collected, and who's overdue, in one dashboard.",
    chips: ["Next.js", "Google OAuth"],
    link: "https://apartment-ashen.vercel.app",
  },
  {
    id: "akeriussms",
    kicker: "Android SMS gateway",
    title: "AkeriusSMS",
    image: akeriusImg,
    description:
      "A Kotlin Android app that turns a spare phone into JCSGO's SMS gateway, texting approvals, rejections, and edits from three different apps.",
    chips: ["Kotlin", "Android"],
    link: null,
  },
];

export const roomGridRooms = ["B3 - 101", "B3 - 102", "B3 - 104", "B1 - Hall", "B2 - 210", "B5 - 003"];
export const roomGridBooked = [3, 4, 9, 14, 15, 20, 26, 31];

export const requestPortalImage = requestPortal;
