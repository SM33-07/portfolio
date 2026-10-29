"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_LINKS } from "@/data/resume";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-vellum)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity - wordmark only */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-vermilion)] rounded p-1 whitespace-nowrap shrink-0"
          aria-label="Soham More — Home"
          onClick={() => setIsOpen(false)}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-vermilion)] group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-tight text-sm sm:text-base font-mono">
            SOHAM MORE
          </span>
        </Link>

        {/* Desktop Section Navigation (>= 1024px) */}
        <nav
          className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium font-mono shrink-0"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--text-muted)] hover:text-[var(--accent-vermilion)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-vermilion)] rounded py-1 px-1.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Profiles & Résumé Actions */}
        <div className="hidden sm:flex items-center gap-2.5 text-xs font-mono">
          <a
            href={PERSONAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--text-ink)] text-[var(--text-ink)] transition-colors"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--text-ink)] text-[var(--text-ink)] transition-colors"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors font-medium"
            aria-label="View Résumé PDF (opens in new tab)"
          >
            Résumé
          </a>
        </div>

        {/* Mobile / Tablet Menu Button (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Direct Résumé quick action on small screens */}
          <a
            href={PERSONAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-2.5 py-1 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors text-xs font-mono font-medium"
            aria-label="View Résumé PDF"
          >
            Résumé
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center min-h-[40px] px-3 py-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-ink)] hover:bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-vermilion)] text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            <span className="mr-1.5" aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {/* Accessible Mobile / Tablet Navigation Panel (< 1024px) */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-vellum)] px-4 py-5 shadow-lg animate-in fade-in duration-150"
          role="region"
          aria-label="Mobile navigation panel"
        >
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-1.5">
              Navigation
            </div>
            <nav className="grid grid-cols-2 gap-2" aria-label="Mobile section links">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm font-mono text-[var(--text-ink)] hover:text-[var(--accent-vermilion)] hover:border-[var(--accent-vermilion)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-vermilion)]"
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-xs text-[var(--text-muted)]" aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[var(--text-muted)]">Channels:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-ink)] hover:border-[var(--text-ink)]"
                >
                  GitHub ↗
                </a>
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-ink)] hover:border-[var(--text-ink)]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
