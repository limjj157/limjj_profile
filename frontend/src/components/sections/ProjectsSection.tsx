"use client";

import { useState } from "react";
import type { Project, Industry } from "@/types";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
}

const INDUSTRIES: Industry[] = [
  "금융",
  "유통",
  "교육",
  "공공",
  "의료",
  "제조",
  "여행",
  "통신",
];

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<Industry | null>(null);

  const filtered = activeFilter
    ? projects.filter((p) => p.industry === activeFilter)
    : projects;

  return (
    <Section id="projects">
      <SectionTitle title="Projects" subtitle="주요 프로젝트" />

      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeFilter === null
              ? "bg-accent text-white"
              : "bg-card text-muted hover:text-foreground"
          )}
        >
          전체
        </button>
        {INDUSTRIES.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveFilter(industry)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeFilter === industry
                ? "bg-accent text-white"
                : "bg-card text-muted hover:text-foreground"
            )}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.id}>
            <div className="mb-3 flex items-start justify-between">
              <Badge variant="industry">{project.industry}</Badge>
              <span className="text-xs text-muted">{project.period}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold leading-snug">
              {project.name}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mb-4 text-sm text-accent">{project.role}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted">
          해당 산업 분야의 프로젝트가 없습니다.
        </p>
      )}
    </Section>
  );
}
