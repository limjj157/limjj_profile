import { profileData } from "@/lib/data/profile";
import { skillsData } from "@/lib/data/skills";
import { careerData } from "@/lib/data/career";
import { projectsData } from "@/lib/data/projects";

import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection profile={profileData} />
        <AboutSection profile={profileData} />
        <SkillsSection skills={skillsData} />
        <ExperienceSection career={careerData} />
        <ProjectsSection projects={projectsData} />
        <ContactSection profile={profileData} />
      </main>
      <Footer />
    </>
  );
}
