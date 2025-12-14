import { GraduationCap, Zap, Globe, Cpu, Layout } from 'lucide-react';

// Use the user's uploaded image if available in a real environment. 
// For this demo, we use a placeholder or the assumption the user puts their file in 'public'.
// Since I cannot host the file, I will use a placeholder that matches the description style.
export const PROFILE_IMAGE_URL = "https://i.postimg.cc/0NnrmvDF/c637f55d-08cf-408c-b3e7-f73ec8bfecb4.png"; 

export const BIO_TITLE = "The King of Developers";
export const BIO_DESCRIPTION = "I am the king of developers, primarily a web developer. Obviously, as I am excellence incarnate, I am a full-stack developer, meaning both front-end and back-end. I have mastered the art of designing and creating robust and high-performance solutions. My expertise guarantees flawless execution quality and a delivery speed that defies all competition, saving my clients precious time. Choosing my know-how means opting for efficiency and perfection.";

export interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
  color: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Paul Event",
    url: "https://paulevent.netlify.app",
    description: "An extravagant event management platform offering seamless coordination.",
    tags: ["React", "Event", "UI/UX"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "NUHM",
    url: "https://nuhm.netlify.app",
    description: "Next-gen utility for high-performance management.",
    tags: ["FullStack", "Dashboard", "Analytics"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Fayol",
    url: "https://fayol.netlify.app",
    description: "A masterpiece of corporate structure visualization.",
    tags: ["Enterprise", "Visualization", "Web"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Rach",
    url: "https://racher.netlify.app",
    description: "Robust architecture handling complex data flows.",
    tags: ["Data", "Architecture", "Speed"],
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Superpropre",
    url: "https://superpropre.netlify.app/",
    description: "The cleanest code for the cleanest services.",
    tags: ["Service", "Clean", "Responsive"],
    color: "from-emerald-400 to-green-600"
  }
];

export const SKILLS = [
  { name: "Frontend Architecture", icon: Layout, level: 100 },
  { name: "Backend Logic", icon: Cpu, level: 100 },
  { name: "Global Deployment", icon: Globe, level: 100 },
  { name: "Rapid Delivery", icon: Zap, level: 100 },
  { name: "Mastery", icon: GraduationCap, level: 100 },
];