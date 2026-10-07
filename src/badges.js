import googleEducatorL1Badge from "./assets/badges/google-educator-l1.png";
import googleEducatorL2Badge from "./assets/badges/google-educator-l2.png";
import courseraBadge from "./assets/badges/coursera-tech-support.png";

export const badges = [
  {
    kind: "credly",
    id: "def22f13-0844-4581-9187-321c6ea1822a",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    kind: "credly",
    id: "7009d351-e940-48d6-998a-11598a75b757",
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
  },
  {
    kind: "credly",
    id: "2b9cc731-e035-4f42-ae4b-a294ca106097",
    title: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
  },
  {
    kind: "image",
    image: googleEducatorL1Badge,
    title: "Google Certified Educator Level 1",
    issuer: "Google for Education",
    note: "Issued May 2020, valid through May 2023",
    verifyUrl: "https://www.credential.net/87561969-18d2-4deb-87ce-e6e2549dff12",
  },
  {
    kind: "image",
    image: googleEducatorL2Badge,
    title: "Google Certified Educator Level 2",
    issuer: "Google for Education",
    note: "Issued May 2020, valid through May 2023",
    verifyUrl: "https://www.credential.net/cc7900ab-71f0-4aec-91e5-09e16f218f03",
  },
  {
    kind: "image",
    image: courseraBadge,
    title: "Technical Support Fundamentals",
    issuer: "Google, via Coursera",
    note: "Completed October 2022",
    verifyUrl: "https://coursera.org/verify/GE4TYCFUQGGG",
  },
];
