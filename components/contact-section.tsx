"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const socialLinks = [
  { name: "GitHub", icon: "GH", url: "https://github.com/LauaneMorais", color: "#FFFFFF" },
  { name: "LinkedIn", icon: "IN", url: "https://www.linkedin.com/in/lauane-morais/", color: "#0A66C2" },
  { name: "Instagram", icon: "IG", url: "https://www.instagram.com/lauanemorais/", color: "#E4405F" },
]

export function ContactSection() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="contact"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#360D4F] to-[#0D0015]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="absolute inset-0 opacity-5 hidden sm:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-white transform -rotate-45"
              style={{
                left: `${i * 10}%`,
                top: 0,
                width: "200%",
              }}
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 10 + i, repeat: Infinity }}
            />
          ))}
        </div>

        <motion.div
          className="absolute -right-32 sm:-right-20 -bottom-32 sm:-bottom-20 opacity-5 sm:opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="200"
            height="200"
            className="sm:w-[400px] sm:h-[400px]"
            viewBox="0 0 24 24"
            fill="#FFD700"
          >
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </motion.div>
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <motion.div className="inline-block relative">
            <h2 className="section-title">CONTATO</h2>
            <motion.div
              className="flex items-center justify-center gap-2 mt-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="w-6 sm:w-8 h-1 bg-[#FF1493]" />
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#FFD700">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
              </svg>
              <div className="w-6 sm:w-8 h-1 bg-[#FF1493]" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-[family-name:var(--font-space)] text-white/70 mt-6 sm:mt-8 max-w-md mx-auto text-sm sm:text-base lg:text-lg px-2"
          >
            {"Vamos criar algo incrível juntos? Entre em contato e vamos conversar!"}
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 sm:gap-8 w-full order-2 lg:order-1"
          >
            <div className="flex flex-col gap-4 sm:gap-5">
              {[
                { label: "EMAIL", value: "lauane.morais.araujo@dcomp.ufs.br", icon: "✉️" },
                { label: "LOCALIZAÇÃO", value: "Aracaju, SE", icon: "📍" },
                { label: "DISPONIBILIDADE", value: "Meio período ou Freelance", icon: "💼" },
              ].map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 sm:p-5 lg:p-6 border-l-4 border-[#6E00B3] bg-[#1A0029]/50 w-full"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl shrink-0">{info.icon}</span>
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-bebas)] text-[#FF1493] text-sm sm:text-base">
                      {info.label}
                    </p>
                    <p className="font-[family-name:var(--font-space)] text-white text-sm sm:text-base lg:text-lg break-words">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full">
              <h3 className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 text-center lg:text-left">
                REDES SOCIAIS
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      boxShadow: `0 0 20px ${social.color}`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 flex items-center justify-center font-[family-name:var(--font-bebas)] text-base sm:text-lg lg:text-xl transition-colors shrink-0"
                    style={{
                      borderColor: social.color,
                      color: social.color,
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-[min(100%,480px)] mx-auto lg:mx-0 lg:ml-auto order-1 lg:order-2"
          >
            <div className="relative z-10 pb-8 sm:pb-0">
              <motion.div
                className="absolute -inset-3 sm:-inset-4 border-4 border-[#FF1493]"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -inset-6 sm:-inset-8 border-4 border-[#00D4FF] opacity-50"
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />

              <div className="relative aspect-square bg-gradient-to-br from-[#3C0061] to-[#6E00B3] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#FF1493]/30 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <img
                  src="/footer-me.png"
                  alt="Lauane de Morais Araujo"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8"
                  animate={{ y: [0, -10, 0], rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg viewBox="0 0 24 24" fill="#FFD700">
                    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-5 h-5 sm:w-6 sm:h-6"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg viewBox="0 0 24 24" fill="#FF1493">
                    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                  </svg>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative sm:absolute sm:-bottom-6 sm:-right-6 bg-[#FF1493] px-4 py-2 sm:px-6 sm:py-3 z-20 w-fit mx-auto sm:mx-0 mt-4 sm:mt-0"
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="font-[family-name:var(--font-bebas)] text-lg sm:text-xl text-white whitespace-nowrap">
                DISPONÍVEL
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-12 sm:mt-16 lg:mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl md:text-5xl text-[#6E00B3]/30 font-bold tracking-wider px-4"
              >
                {"LET'S WORK TOGETHER ★ LET'S CREATE ★ "}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
