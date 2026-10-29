import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { ChapterNavigation } from "@/components/ChapterNavigation";
import { WorkSection } from "@/components/WorkSection";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main id="main-content" className="flex-1">
        <Hero />
        <ChapterNavigation />
        <WorkSection />
      </main>
    </>
  );
}
