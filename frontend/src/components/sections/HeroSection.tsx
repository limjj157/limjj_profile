"use client";

import Image from "next/image";
import type { Profile } from "@/types";
import Button from "@/components/ui/Button";
import { smoothScrollTo } from "@/lib/utils";

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-2 text-lg text-accent font-medium">
            {profile.titleEn} @ {profile.company}
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mb-2 text-xl text-muted md:text-2xl">
            {profile.title} ({profile.titleEn})
          </p>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
            {profile.intro}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button onClick={() => smoothScrollTo("contact")}>
              연락하기
            </Button>
            <Button
              variant="outline"
              onClick={() => smoothScrollTo("projects")}
            >
              프로젝트 보기
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/30 md:h-80 md:w-80">
            <Image
              src={profile.profileImage}
              alt={`${profile.name} 프로필`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-full bg-accent/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
