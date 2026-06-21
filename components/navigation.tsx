"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "about", "skills", "tools", "projects", "personal", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { id: "about", label: "SOBRE" },
    { id: "skills", label: "SKILLS" },
    { id: "tools", label: "TOOLS" },
    { id: "projects", label: "PROJETOS" },
    { id: "personal", label: "PESSOAL" },
    { id: "contact", label: "CONTATO" },
  ]

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
          isScrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-md py-2 sm:py-3 shadow-[0_4px_24px_rgba(110,0,179,0.25)]"
            : "bg-transparent py-3 sm:py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3">
          <motion.button
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative shrink-0"
            aria-label="Ir para o início"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#FF1493]">
              LAU
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-[#FF1493]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.3 }}
            />
          </motion.button>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#FF1493" }}
                className={`relative font-[family-name:var(--font-bebas)] text-lg tracking-wider transition-colors ${
                  activeSection === item.id ? "text-[#FF1493]" : "text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF1493]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              className="hidden sm:flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="font-[family-name:var(--font-space)] text-sm sm:text-base text-[#00D4FF]">
                Disponível
              </span>
            </motion.div>

            <motion.div
              className="flex sm:hidden items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="font-[family-name:var(--font-space)] text-xs text-[#00D4FF]">
                ON
              </span>
            </motion.div>

            <motion.button
              type="button"
              className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-[#FF1493] bg-[#1A0029]/80"
              onClick={() => setMobileMenuOpen((open) => !open)}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                className="block w-5 h-0.5 bg-[#FF1493] origin-center"
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-[#FFD700]"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-[#00D4FF] origin-center"
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#0D0015]/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[min(100%,20rem)] pt-[calc(env(safe-area-inset-top)+4.5rem)] pb-[env(safe-area-inset-bottom)] px-6 bg-[#1A0029] border-l-4 border-[#FF1493] shadow-[-8px_0_40px_rgba(255,20,147,0.35)] md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.06 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left py-4 px-4 border-l-4 font-[family-name:var(--font-bebas)] text-2xl tracking-wider transition-colors ${
                      activeSection === item.id
                        ? "border-[#FF1493] text-[#FF1493] bg-[#6E00B3]/20"
                        : "border-[#6E00B3]/50 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-auto pt-6 border-t border-[#6E00B3]/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <p
                  className="font-[family-name:var(--font-display)] text-[#6E00B3] text-sm tracking-widest"
                  style={{ writingMode: "vertical-rl" }}
                >
                  PORTFOLIO 2026
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
