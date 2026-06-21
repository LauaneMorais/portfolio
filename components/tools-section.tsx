"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const tools = [
  { name: "Next.js", color: "#61DAFB", level: 60 },
  { name: "React.js", color: "#FFFFFF", level: 50 },
  { name: "Tailwind CSS", color: "#3178C6", level: 40 },
  { name: "JavaScript", color: "#F7DF1E", level: 70 },
  { name: "TypeScript", color: "#E34F26", level: 60 },
  { name: "Node.js", color: "#1572B6", level: 20 },
  { name: "Git", color: "#F05032", level: 80 },
  { name: "PostgreSQL", color: "#F24E1E", level: 40 },
  { name: "C / C++", color: "#007ACC", level: 60 },
  { name: "HTML", color: "#F7DF1E", level: 70 },
  { name: "CSS", color: "#007ACC", level: 80 },
  { name: "Java", color: "#007ACC", level: 40 },
]

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section
      id="tools"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[#3C0061] transform -skew-y-2 sm:-skew-y-3 scale-105 pointer-events-none" />

      <div className="absolute inset-0 opacity-10 pointer-events-none hidden sm:block">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white w-full"
            style={{ top: `${i * 10}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FFD700] flex items-center justify-center shrink-0 mx-auto sm:mx-0"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-2xl sm:text-3xl">🛠️</span>
            </motion.div>
            <div className="text-center sm:text-left w-full">
              <h2 className="section-title">FERRAMENTAS</h2>
              <motion.div
                className="h-1 bg-[#FF1493] mx-auto sm:mx-0 max-w-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: index * 0.06,
                type: "spring",
                stiffness: 200,
              }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              onTouchStart={() => setHoveredTool(tool.name)}
              onTouchEnd={() => setHoveredTool(null)}
              className="relative group cursor-pointer w-full"
            >
              <motion.div
                className="relative p-4 sm:p-6 lg:p-8 border-2 bg-[#0D0015]/50 backdrop-blur-sm overflow-hidden"
                style={{ borderColor: tool.color }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${tool.color}50`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: tool.color }}
                />

                <h3
                  className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center transition-colors break-words"
                  style={{ color: hoveredTool === tool.name ? tool.color : "#FFFFFF" }}
                >
                  {tool.name}
                </h3>

                <div className="mt-3 sm:mt-4 h-2 bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: tool.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : {}}
                    transition={{ delay: 0.4 + index * 0.06, duration: 0.8 }}
                  />
                </div>

                <motion.p
                  className="text-center mt-2 font-[family-name:var(--font-space)] text-sm"
                  style={{ color: tool.color }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.06 }}
                >
                  {tool.level}%
                </motion.p>

                <div
                  className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
                  style={{ borderColor: tool.color }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
                  style={{ borderColor: tool.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute right-4 top-1/2 w-20 h-20 sm:w-32 sm:h-32 opacity-20 sm:opacity-30 pointer-events-none hidden sm:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="0.5" className="w-full h-full">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
