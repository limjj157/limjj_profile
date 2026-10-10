"use client";

import type { Profile } from "@/types";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

interface AboutSectionProps {
  profile: Profile;
}

const ROLE_ICONS: Record<string, string> = {
  PM: "📋",
  PL: "🔧",
  DA: "🗄️",
  QA: "✅",
};

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <Section id="about">
      <SectionTitle title="About Me" subtitle="소개" />

      {/* Intro */}
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
          IT 분야에서 20년 이상의 경력을 바탕으로, 프로젝트 관리(PM)부터 데이터 아키텍처(DA),
          비즈니스 분석(BA)까지 시스템의 전체 라이프사이클을 아우르는 전문가입니다.
          다양한 산업 분야에서의 경험을 통해 비즈니스 요구사항을 기술적 솔루션으로 전환하는 역량을 갖추고 있습니다.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { value: "20+", label: "Years Experience", labelKo: "경력" },
          { value: "12+", label: "Projects", labelKo: "프로젝트" },
          { value: "9", label: "Companies", labelKo: "기업" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-accent">{stat.value}</p>
            <p className="mt-1 text-muted">
              {stat.labelKo} · {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Roles */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {profile.roles.map((role) => (
          <Card key={role.titleEn}>
            <div className="flex items-start gap-4">
              <span className="text-3xl">{ROLE_ICONS[role.titleEn]}</span>
              <div>
                <h3 className="text-lg font-semibold">
                  {role.title}
                  <span className="ml-2 text-sm text-muted">
                    ({role.titleEn})
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {role.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Education */}
        <Card hover={false}>
          <h3 className="mb-4 text-lg font-semibold">학력</h3>
          <ul className="space-y-3">
            {profile.education.map((edu) => (
              <li key={edu.school} className="border-l-2 border-accent/30 pl-4">
                <p className="font-medium">{edu.school}</p>
                <p className="text-sm text-muted">
                  {edu.major} · {edu.period}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        {/* Certifications */}
        <Card hover={false}>
          <h3 className="mb-4 text-lg font-semibold">자격증</h3>
          <ul className="space-y-3">
            {profile.certifications.map((cert) => (
              <li
                key={cert.name}
                className="border-l-2 border-accent/30 pl-4"
              >
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
