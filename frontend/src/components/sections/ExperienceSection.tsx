"use client";

import type { Career } from "@/types";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

interface ExperienceSectionProps {
  career: Career[];
}

export default function ExperienceSection({ career }: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="경력 사항" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

        <div className="space-y-12">
          {career.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.company + item.period}
                className="relative flex flex-col md:flex-row"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-[6px]" />

                {/* Content */}
                <div
                  className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{item.company}</h3>
                  <p className="text-sm text-accent">{item.role}</p>
                  <p className="text-sm text-muted">{item.department}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
