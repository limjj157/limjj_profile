"use client";

import { useState } from "react";
import type { Profile, ContactFormData } from "@/types";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

interface ContactSectionProps {
  profile: Profile;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact">
      <SectionTitle title="Contact" subtitle="연락하기" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted">
            프로젝트 협업이나 문의가 있으시면 편하게 연락해주세요.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-accent hover:text-accent-hover"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-xl">🏢</span>
              </div>
              <div>
                <p className="text-sm text-muted">Company</p>
                <p className="font-medium">{profile.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="제목"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="메시지"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "전송 중..." : "메시지 보내기"}
          </Button>

          {status === "success" && (
            <p className="text-center text-sm text-green-400">
              메시지가 성공적으로 전송되었습니다.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              전송에 실패했습니다. 다시 시도해주세요.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
