import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { ProjectsSection } from "@/components/projects-section"
import { PersonalSection } from "@/components/personal-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ToolsSection />
      <ProjectsSection />
      <PersonalSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
