import TopBar from "@/components/TopBar";
import ChapterNavigation from "@/components/ChapterNavigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <TopBar />
      <ChapterNavigation />
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
