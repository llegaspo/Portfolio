export type ProjectRecord = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  heroImage: string;
  description: string;
  features: string[];
  challenges: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const PROJECTS: ProjectRecord[] = [
  {
    id: "eduroad",
    title: "EduRoad",
    subtitle: "AI-Powered Educational Pathway App",
    date: "Notion Hackathon (UP Cebu)",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    description:
      "Developed during the Notion Hackathon at UP Cebu, EduRoad is a mobile application designed to guide students through their educational journeys. By integrating AI features and robust API functionalities, the app provides personalized learning roadmaps and resource recommendations.",
    features: [
      "AI-driven personalized learning paths",
      "Seamless API integration",
      "Cross-platform mobile UI",
      "Real-time progress tracking",
    ],
    challenges:
      "Integrating complex AI endpoints within the Flutter ecosystem while maintaining a responsive UI was challenging. We overcame this by optimizing API calls and using asynchronous state management.",
    techStack: ["Flutter", "Android Studio", "Dart", "OpenAI API", "REST APIs"],
    githubUrl: "https://github.com/yourusername/eduroad",
  },
  {
    id: "palengke",
    title: "PALengke",
    subtitle: "Cross-Platform Digital Marketplace",
    date: "IBPAP Hackathon (Can You HackIT?)",
    heroImage:
      "https://images.unsplash.com/photo-1472851294608-4155f2118c03?q=80&w=2070&auto=format&fit=crop",
    description:
      "PALengke is a React Native web application created during the IBPAP 'Can You HackIT?' challenge. It digitizes the traditional marketplace experience, allowing local vendors to reach a broader audience through a unified digital platform.",
    features: [
      "Cross-platform compatibility",
      "Vendor inventory management",
      "Real-time order notifications",
      "Localized search filtering",
    ],
    challenges:
      "The primary hurdle was the strict time constraint of the hackathon. We had to prioritize core MVP features and utilize React Native's reusability to deploy a functional web application rapidly.",
    techStack: ["React Native", "TypeScript", "Node.js", "Firebase"],
    githubUrl: "https://github.com/yourusername/palengke",
  },
  {
    id: "trend-micro-ctf",
    title: "Trend Micro CTF",
    subtitle: "Cybersecurity Capture The Flag Challenge",
    date: "Trend Micro Competition",
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    description:
      "Competed in a high-stakes cybersecurity challenge hosted by Trend Micro. As a team of first-time participants, we navigated complex security puzzles, analyzing vulnerabilities and decrypting secure data to capture flags.",
    features: [
      "Network traffic analysis",
      "Cryptography solving",
      "Web vulnerability exploitation",
      "Forensic data recovery",
    ],
    challenges:
      "Lacking prior CTF experience, we faced a steep learning curve with advanced cryptographic challenges. We relied on rapid on-the-spot learning and strong teamwork to solve nearly all flags.",
    techStack: [
      "Python",
      "Wireshark",
      "Linux/Kali",
      "Bash Scripting",
      "Burp Suite",
    ],
  },
  {
    id: "panday",
    title: "Panday",
    subtitle: "Informal Labor Connection Platform",
    date: "PSC X - Top 25 Finalist",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-cd67bcecfb31?q=80&w=2070&auto=format&fit=crop",
    description:
      "Recognized as a Top 25 Finalist in the Philippine Startup Challenge (Central Visayas), Panday is a web application that connects homeowners with informal service workers like plumbers and masons, bridging the gap in the gig economy.",
    features: [
      "Worker profile verification system",
      "Geolocation-based matching",
      "Service rating and review system",
      "Direct messaging interface",
    ],
    challenges:
      "Designing a system that builds trust between anonymous clients and informal workers was difficult. We implemented a verification logic and a transparent review system to ensure safety and reliability for both parties.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Google Maps API"],
    githubUrl: "https://github.com/yourusername/panday",
  },
];

export const COMPETITIONS = [
  {
    id: "notion-hack",
    title: "Notion Hackathon (UP Cebu)",
    role: "Team Leader",
    result: "Participant",
    shortDesc: "Built a mobile app called EduRoad with Flutter.",
    fullDesc:
      "Led the development of 'EduRoad', a mobile application built with Flutter and Android Studio. We focused on integrating AI features and API functionalities to create personalized learning pathways for students.",
    image: "/eduroad.png",
    projectId: "eduroad",
  },
  {
    id: "ibpap",
    title: "IBPAP Hackathon (Can You HackIT?)",
    role: "Developer",
    result: "Participant",
    shortDesc: "Created a React Native web app called PALengke.",
    fullDesc:
      "Developed 'PALengke' under strict time constraints. This experience honed my cross-platform development skills, delivering a functional React Native web application that digitizes local market transactions.",
    image: "PALengke.png",
    projectId: "palengke",
  },
  {
    id: "trend-micro",
    title: "Trend Micro CTF",
    role: "Security Analyst",
    result: "High Scorer",
    shortDesc: "Solved nearly all flags in network forensics.",
    fullDesc:
      "Competed in a high-stakes cybersecurity challenge. Despite being first-time participants, our team solved nearly all flags, specializing in network forensics, packet analysis, and vulnerability assessment.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    projectId: "trend-micro-ctf",
  },
  {
    id: "psc-x",
    title: "Philippine Startup Challenge (PSC) X",
    role: "Hustler / Dev",
    result: "Top 25 Finalist",
    shortDesc: "Developed 'Panday' connecting informal workers.",
    fullDesc:
      "Recognized as a Top 25 Finalist in Central Visayas. We developed 'Panday', a web application that connects homeowners with informal service workers (plumbers, masons), bridging the gap in the local gig economy.",
    image: "panday.png",
    projectId: "panday",
  },
];
