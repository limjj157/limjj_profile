export interface Profile {
  name: string;
  nameEn: string;
  company: string;
  title: string;
  titleEn: string;
  phone: string;
  email: string;
  intro: string;
  profileImage: string;
  roles: Role[];
  specialties: string[];
  education: Education[];
  certifications: Certification[];
}

export interface Role {
  title: string;
  titleEn: string;
  description: string;
}

export interface Education {
  type: string;
  school: string;
  major: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Career {
  period: string;
  company: string;
  department: string;
  role: string;
  description: string;
}

export interface Project {
  id: string;
  period: string;
  name: string;
  industry: Industry;
  description: string;
  role: string;
  techStack: string[];
}

export type Industry =
  | "금융"
  | "유통"
  | "교육"
  | "공공"
  | "의료"
  | "제조"
  | "여행"
  | "통신";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
