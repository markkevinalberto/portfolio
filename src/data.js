import jcsgoHome from "./assets/jcsgo-home.jpg";
import seedDome from "./assets/seed-dome.jpg";
import requestPortal from "./assets/request-portal.png";
import declareImg from "./assets/declare.png";
import rentalImg from "./assets/rental.png";
import akeriusImg from "./assets/akeriussms.jpg";
import qrGeneratorImg from "./assets/qr-generator.jpg";
import dreamCampsiteImg from "./assets/dreamcampsite.jpg";
import readoraImg from "./assets/readora.jpg";

export const flagshipStats = [
  { num: "40", label: "bookable rooms" },
  { num: "5", label: "church buildings" },
  { num: "1", label: "Postgres constraint, zero conflicts" },
];

export const marqueeItems = [
  { text: "git push origin main", style: "mono" },
  { text: "Websites", style: "serif" },
  { text: "npm run build", style: "mono" },
  { text: "Web apps", style: "serif" },
  { text: "EXCLUDE USING gist", style: "mono" },
  { text: "Android", style: "serif" },
  { text: "onOpen()", style: "mono" },
  { text: "Automations", style: "serif" },
  { text: "Astro", style: "mono" },
  { text: "Livestreams", style: "serif" },
  { text: "Next.js", style: "mono" },
  { text: "Kotlin", style: "mono" },
  { text: "PostgreSQL", style: "mono" },
  { text: "Apps Script", style: "mono" },
  { text: "Ship it", style: "serif" },
];

export const services = [
  {
    title: "Websites",
    lines: ["Headless sites that publish themselves.", "Content in WordPress, pages in Astro."],
    tags: ["Astro", "WordPress REST", "GitHub Actions"],
  },
  {
    title: "Web apps",
    lines: ["Booking, scheduling, and rentals.", "Rules enforced in the database."],
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "Android & automation",
    lines: ["SMS gateways and spreadsheet tools.", "The glue between the other apps."],
    tags: ["Kotlin", "Android", "Apps Script"],
  },
  {
    title: "Media & AV systems",
    lines: ["Livestream rooms, church audio, CCTV.", "Set up, cabled, and kept running."],
    tags: ["Livestream", "Audio", "Structured cabling"],
  },
];

export const toolbox = [
  {
    group: "Web",
    items: ["Astro", "Next.js", "React", "Vite", "Tailwind CSS", "Vanilla JS", "HTML & CSS"],
  },
  {
    group: "Backend & data",
    items: [
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "WordPress REST API",
      "JWT auth",
      "Google OAuth",
      "Apps Script",
      "Google Sheets",
    ],
  },
  { group: "Mobile", items: ["Kotlin", "Android", "Capacitor"] },
  { group: "Delivery", items: ["Git", "GitHub Actions", "GitHub Pages", "Vercel", "Hostinger"] },
  {
    group: "Media & AV",
    items: ["Livestream production", "Church audio systems", "Photography", "Videography", "Canva"],
  },
  {
    group: "Hardware & IT",
    items: ["Networking", "Structured cabling", "CCTV", "Hardware procurement", "PC servicing (NC II)"],
  },
];

export const projects = [
  {
    id: "readora",
    kicker: "Reading comprehension app",
    title: "Readora",
    image: readoraImg,
    description:
      "Published as DigiKuwento, with Readora the owl as guide. Learners read short stories from everyday Filipino life, then recall, sequence, and retell them; teachers score the retellings and export Phil-IRI pre- and post-test results.",
    chips: ["Next.js 16", "Supabase", "dnd-kit", "Works offline"],
    link: "https://digikuwento.vercel.app",
    term: {
      cmd: "open digikuwento.vercel.app",
      lines: ["deployed on Vercel, data in Supabase", "keeps working offline, syncs when back online"],
    },
  },
  {
    id: "jcsgo",
    kicker: "Headless website",
    title: "jcsgo.org",
    image: jcsgoHome,
    description:
      "An Astro frontend pulling content from a WordPress backend over the REST API. Deploys itself via GitHub Actions to Hostinger.",
    chips: ["Astro", "WordPress REST API", "GitHub Actions"],
    link: "https://jcsgo.org",
    term: {
      cmd: "git push origin main",
      lines: ["GitHub Actions builds the Astro site", "deployed to Hostinger, live at jcsgo.org"],
    },
  },
  {
    id: "dream-campsite",
    kicker: "Camp & retreat site",
    title: "Dream Campsite",
    image: dreamCampsiteImg,
    description:
      "The page for JCSGO's youth camp and retreat facility in Trece Martires, Cavite. Part of jcsgo.org, run day to day by the same person who manages the bookings.",
    chips: ["Astro", "WordPress REST API"],
    link: "https://jcsgo.org/dreamcampsite/",
    term: {
      cmd: "open jcsgo.org/dreamcampsite",
      lines: ["part of the jcsgo.org build", "camp run day to day by its manager: me"],
    },
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
    term: {
      cmd: "open jcsgo.org/basketball-court",
      lines: ["real-time court availability", "GCash payment, no phone calls"],
    },
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
    term: {
      cmd: "open declare-cyan.vercel.app",
      lines: ["deployed on Vercel", "rosters, confirmations, reminders"],
    },
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
    term: {
      cmd: "open apartment-ashen.vercel.app",
      lines: ["deployed on Vercel", "Google OAuth sign-in"],
    },
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
    term: {
      cmd: "run akeriussms",
      lines: ["running on a spare Android phone", "texts approvals for three apps"],
    },
  },
  {
    id: "qr-roster",
    kicker: "Classroom tool",
    title: "Student QR Roster Generator",
    image: qrGeneratorImg,
    description:
      "Paste a class list, generate one scannable code per student for recitation and attendance, and export the whole set as a ZIP. No installs, runs entirely in the browser.",
    chips: ["Vanilla JS", "No login"],
    link: "https://markkevinalberto.github.io/qr-Generator/student-qr-roster-generator.html",
    term: {
      cmd: "open qr-Generator",
      lines: ["hosted on GitHub Pages", "runs fully in the browser, no installs"],
    },
  },
  {
    id: "grade-hub",
    kicker: "Google Sheets add-on",
    title: "Grade Hub",
    type: "code",
    files: ["Code.gs", "Setup.gs", "Submit.gs", "Util.gs", "FullEntry.gs"],
    description:
      "An Apps Script bound to the grading sheet: adds a Grade Hub menu, loads a roster on demand, and walks a teacher through cascading dropdowns instead of raw spreadsheet cells.",
    chips: ["Apps Script", "Google Sheets"],
    link: null,
    term: {
      prompt: "▸",
      cmd: "onOpen()",
      lines: ["Grade Hub menu added to the sheet", "bound to a private grading spreadsheet"],
    },
  },
];

export const roomGridRooms = ["B3 - 101", "B3 - 102", "B3 - 104", "B1 - Hall", "B2 - 210", "B5 - 003"];
export const roomGridBooked = [3, 4, 9, 14, 15, 20, 26, 31];

export const requestPortalImage = requestPortal;
