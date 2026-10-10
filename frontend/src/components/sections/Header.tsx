"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavClick("hero")}
          className="text-xl font-bold text-accent"
        >
          JJ.Lim
        </button>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="메뉴 열기"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              isMobileMenuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              isMobileMenuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 bg-background/95 px-4 pb-6 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "text-left text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
