"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches
    setIsCoarsePointer(coarse)

    if (coarse || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  const starCount = isCoarsePointer ? 5 : 8

  return (
    <section
      id="hero"
      className="min-h-[100dvh] relative overflow-hidden flex items-center justify-center pt-20 sm:pt-24 pb-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-15 sm:opacity-20"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              #6E00B3 40px,
              #6E00B3 80px
            )`,
          }}
          animate={prefersReducedMotion ? undefined : { x: [0, 100] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {[...Array(starCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${8 + i * (88 / starCount)}%`,
              top: `${15 + (i % 3) * 28}%`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <svg
              width={14 + i * 3}
              height={14 + i * 3}
              viewBox="0 0 24 24"
              fill={i % 2 === 0 ? "#FF1493" : "#FFD700"}
              className="sm:w-auto sm:h-auto"
              style={{ width: 14 + i * 3, height: 14 + i * 3 }}
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </motion.div>
        ))}

        <motion.div
          className="absolute -right-24 sm:-right-40 -top-24 sm:-top-40 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-4 border-[#6E00B3] opacity-25 sm:opacity-30"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute right-1/4 top-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[#6E00B3] blur-[60px] sm:blur-[80px]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 section-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={
            isCoarsePointer || prefersReducedMotion
              ? undefined
              : { x: mousePosition.x, y: mousePosition.y }
          }
          className="w-full"
        >
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(2.75rem,12vw,9rem)] text-white leading-[0.9] tracking-tight">
            <motion.span
              className="block"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              LAUANE
            </motion.span>
            <motion.span
              className="block text-[#FF1493] -mt-2 sm:-mt-4 md:-mt-6"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              DE MORAIS
            </motion.span>
            <motion.span
              className="block text-[#00D4FF] -mt-2 sm:-mt-4 md:-mt-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              ARAUJO
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 sm:mt-8 relative w-full max-w-xs sm:max-w-none"
        >
          <div className="absolute inset-0 bg-[#6E00B3] transform -skew-x-12" />
          <p className="relative font-[family-name:var(--font-space)] text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 text-white">
            DEVELOPER JR
          </p>
        </motion.div>

        <motion.p
          className="mt-4 font-[family-name:var(--font-display)] text-[#6E00B3] text-xs sm:text-sm tracking-[0.3em] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          PORTFOLIO 2026
        </motion.p>

        <motion.div
          className="mt-10 sm:mt-16"
          animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#FF1493] hover:text-[#FFD700] transition-colors p-2"
            aria-label="Rolar para a seção sobre"
          >
            <svg
              width="36"
              height="36"
              className="sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p
          className="font-[family-name:var(--font-display)] text-[#6E00B3] text-xl tracking-widest rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          PORTFOLIO 2026
        </p>
      </motion.div>

      <motion.div
        className="absolute right-3 sm:right-4 bottom-16 sm:bottom-20 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#FFD700]"
            animate={prefersReducedMotion ? undefined : { rotate: 45 }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#FF1493]"
            animate={prefersReducedMotion ? undefined : { rotate: -45 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
