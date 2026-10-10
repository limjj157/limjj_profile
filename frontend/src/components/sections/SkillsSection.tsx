"use client";

import type { SkillCategory } from "@/types";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const CATEGORY_ICONS: Record<string, string> = {
  Management: "📋",
  Architecture: "🏗️",
  Database: "🗄️",
  Development: "💻",
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills">
      <SectionTitle title="Skills" subtitle="기술 역량" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((category) => (
          <Card key={category.category}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">
                {CATEGORY_ICONS[category.category]}
              </span>
              <h3 className="text-lg font-semibold">{category.category}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-muted">{skill.level}/5</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-background">
                    <div
                      className="h-2 rounded-full bg-accent transition-all duration-700"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
