"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    title: "FrontEnd",
    description: "Desenvolvo interfaces modernas, responsivas e focadas na experiência do usuário, transformando ideias em soluções .",
    icon: "💻",
    color: "#FF1493",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "BackEnd",
    description: "Aprendendo a construir aplicações com lógica sólida e integração de dados, garantindo desempenho, organização e escalabilidade.",
    icon: "🎲",
    color: "#FFD700",
    items: ["Node.js", "PostgreSQL", "C / C++", "Java"],
  },
  {
    title: "GESTÃO",
    description: "Atuo gestão de uma liga acadêmica com mais de 30 pessoas, contribuindo na organização e direcionamento de equipes.",
    icon: "⚡",
    color: "#00D4FF",
    items: ["Planejamento", "Liderança", "Gestão de equipes"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="skills"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />

      <motion.div
        className="absolute right-4 sm:right-10 top-16 sm:top-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-[#FF1493] opacity-25 sm:opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-4 sm:left-10 bottom-16 sm:bottom-20 w-32 h-32 sm:w-60 sm:h-60 rounded-full border-4 border-[#00D4FF] opacity-15 sm:opacity-20 pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="section-inner">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12 sm:mb-20 lg:mb-24"
        >
          <motion.div className="inline-block relative w-full max-w-2xl mx-auto" whileHover={{ scale: 1.02 }}>
            <h2 className="section-title">ÁREA DE</h2>
            <motion.span
              className="block sm:absolute sm:-bottom-6 sm:right-0 font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-6xl text-[#FF1493] font-bold tracking-wider mt-2 sm:mt-0"
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              ATUAÇÃO
            </motion.span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 md:grid md:grid-cols-3 mt-8 sm:mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="relative group w-full"
            >
              <div
                className="absolute inset-0 transform -skew-y-2 sm:-skew-y-3 transition-colors duration-300"
                style={{ backgroundColor: `${skill.color}20` }}
              />
              <motion.div
                className="absolute inset-0 transform -skew-y-2 sm:-skew-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 40px ${skill.color}50`,
                }}
              />

              <div className="relative p-6 sm:p-8 lg:p-10 z-10">
                <motion.div
                  className="text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {skill.icon}
                </motion.div>

                <h3
                  className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl mb-2 group-hover:!text-[#0D0015] transition-colors"
                  style={{ color: skill.color }}
                >
                  {skill.title}
                </h3>

                <p className="font-[family-name:var(--font-space)] text-white/70 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 group-hover:text-[#0D0015]/70 transition-colors">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
                      className="px-3 py-1 text-xs font-[family-name:var(--font-space)] border border-white/30 text-white/80 group-hover:border-[#0D0015]/30 group-hover:text-[#0D0015]/80 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="absolute top-2 right-2 w-4 h-4"
                  style={{
                    borderTop: `3px solid ${skill.color}`,
                    borderRight: `3px solid ${skill.color}`,
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-4 h-4"
                  style={{
                    borderBottom: `3px solid ${skill.color}`,
                    borderLeft: `3px solid ${skill.color}`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 sm:opacity-10 pointer-events-none hidden sm:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="280" height="280" className="md:w-[400px] md:h-[400px]" viewBox="0 0 24 24" fill="#6E00B3">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
