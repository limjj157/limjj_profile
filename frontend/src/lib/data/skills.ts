import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Management",
    icon: "clipboard",
    skills: [
      { name: "Project Management", level: 5 },
      { name: "SLA/SLM", level: 5 },
      { name: "외부 업체 관리", level: 5 },
      { name: "Agile/Scrum", level: 4 },
      { name: "Risk Management", level: 4 },
    ],
  },
  {
    category: "Architecture",
    icon: "layers",
    skills: [
      { name: "Business Analysis", level: 5 },
      { name: "System Design", level: 5 },
      { name: "Requirements Analysis", level: 5 },
      { name: "ERD/UML", level: 4 },
      { name: "ISP Consulting", level: 4 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "Oracle", level: 5 },
      { name: "MySQL", level: 4 },
      { name: "MariaDB", level: 4 },
      { name: "Teradata", level: 3 },
      { name: "Data Modeling", level: 5 },
      { name: "DW/BI/EIS", level: 5 },
    ],
  },
  {
    category: "Development",
    icon: "code",
    skills: [
      { name: "Java", level: 4 },
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "Spring", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "AWS", level: 3 },
    ],
  },
];
