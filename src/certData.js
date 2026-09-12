import googleEducatorL2 from "./assets/certs/google-educator-l2.jpg";
import googleEducatorL1 from "./assets/certs/google-educator-l1.jpg";
import googleAiK12 from "./assets/certs/google-ai-k12.jpg";
import courseraTechSupport from "./assets/certs/coursera-tech-support.jpg";
import tesda from "./assets/certs/tesda.jpg";
import drone from "./assets/certs/drone.jpg";
import jcsgoAppreciation from "./assets/certs/jcsgo-appreciation.jpg";
import cednetConvention from "./assets/certs/cednet-convention.jpg";

import wthSummit from "./assets/certs/wth-summit.jpg";
import wthEthicalHacking from "./assets/certs/wth-ethical-hacking.jpg";
import wthVulnerabilities from "./assets/certs/wth-vulnerabilities.jpg";
import wthFutureThreats from "./assets/certs/wth-future-threats.jpg";
import wthCyberLaw from "./assets/certs/wth-cyber-law.jpg";
import wthCollaboration from "./assets/certs/wth-collaboration.jpg";
import wthNewTechnologies from "./assets/certs/wth-new-technologies.jpg";

import datahackCipm from "./assets/certs/datahack-cipm.jpg";
import datahackTrends from "./assets/certs/datahack-trends.jpg";
import datahackCertifications from "./assets/certs/datahack-certifications.jpg";
import datahackHotTopics from "./assets/certs/datahack-hot-topics.jpg";
import datahackTop5Privacy from "./assets/certs/datahack-top5-privacy.jpg";
import datahackCompliance from "./assets/certs/datahack-compliance.jpg";

export const certGroups = [
  {
    id: "individual",
    title: "Certifications and training",
    meta: null,
    category: "Individual",
    items: [
      {
        title: "Google Certified Educator, Level 2",
        sub: "Google for Education · issued May 2020, valid through May 2023",
        image: googleEducatorL2,
      },
      {
        title: "Google Certified Educator, Level 1",
        sub: "Google for Education · issued May 2020, valid through May 2023",
        image: googleEducatorL1,
      },
      {
        title: "Google AI for K12 Educators",
        sub: "Google · completed July 2025, score 94",
        image: googleAiK12,
      },
      {
        title: "Technical Support Fundamentals",
        sub: "Google, via Coursera · October 2022",
        image: courseraTechSupport,
      },
      {
        title: "National Certificate II, Computer Hardware Servicing",
        sub: "TESDA · issued October 2012",
        image: tesda,
      },
      {
        title: "Drone Hands-On Flight Training",
        sub: "CameraHaus Drone Training Center · October 2018",
        image: drone,
      },
      {
        title: "Faculty Development Talk: Data Management",
        sub: "JCSGO Christian Academy · December 2018",
        image: jcsgoAppreciation,
      },
      {
        title: "6th National Convention, Championing Godliness 2.0",
        sub: "Christian Educators' Network International · September 2026",
        image: cednetConvention,
      },
    ],
  },
  {
    id: "wth",
    title: "What The Hack Summit 2016",
    meta: "GlobalKnowledge PH / CompTIA · June 3-4, 2016, SMX MOA, Pasay City",
    category: "Security",
    items: [
      { title: "Summit attendance", image: wthSummit },
      { title: "2-Day Ethical Hacking Bootcamp", image: wthEthicalHacking },
      { title: "Vulnerabilities in Critical Infrastructure", image: wthVulnerabilities },
      { title: "Future Threats & Solutions", image: wthFutureThreats },
      { title: "Cyber and the Law", image: wthCyberLaw },
      { title: "Creating Collaboration", image: wthCollaboration },
      { title: "New Technologies", image: wthNewTechnologies },
    ],
  },
  {
    id: "datahack",
    title: "DataHack 2018: Data Privacy & Cybersecurity Seminar",
    meta: "GlobalKnowledge PH · December 8, 2018, The New Camelot Hotel",
    category: "Security",
    items: [
      { title: "Overview of CIPM Certification", image: datahackCipm },
      { title: "Current Trends in Cybersecurity", image: datahackTrends },
      { title: "Cybersecurity Certifications", image: datahackCertifications },
      { title: "Hot Topics in Cybersecurity", image: datahackHotTopics },
      { title: "Top 5 Concerns in Data Privacy", image: datahackTop5Privacy },
      { title: "Data Privacy Issues and Compliance", image: datahackCompliance },
    ],
  },
];

export const certificateCount = certGroups.reduce((n, g) => n + g.items.length, 0);
