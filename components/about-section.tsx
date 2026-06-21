"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="about"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 top-0 w-full md:w-1/2 h-1/3 md:h-full bg-[#6E00B3] md:transform md:-skew-x-12 md:origin-top-left opacity-40 md:opacity-100"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute right-2 bottom-4 sm:right-0 sm:bottom-0 w-16 h-16 sm:w-32 sm:h-32 border-4 sm:border-8 border-[#FFD700]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="section-title">SOBRE</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 -mt-2 sm:-mt-4">
            <motion.div
              className="h-2 bg-[#FF1493]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "6rem" } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <span className="font-[family-name:var(--font-display)] text-[#FFD700] text-xl sm:text-2xl font-bold tracking-wider">
              MIM
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 md:grid md:grid-cols-2 md:items-center md:gap-20 lg:gap-28">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[min(100%,420px)] mx-auto md:mx-0 md:ml-auto order-1"
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
                  src="/lauane_port.jpeg"
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
                DEV FRONT-END
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 sm:gap-8 order-2 w-full"
          >
            <div className="relative pl-4">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF1493]"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
              />

              <p className="font-[family-name:var(--font-space)] text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                {"Olá! Sou "}
                <span className="text-[#FF1493] font-bold">Lauane de Morais Araujo</span>
                {", uma desenvolvedora front-end júnior apaixonada por transformar ideias em experiências digitais incríveis."}
              </p>
            </div>

            <p className="font-[family-name:var(--font-space)] text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
              {"Minha jornada no mundo da programação começou quando ingressei na Liga Acadêmica de Desenvolvimento Web (LAWD) da UFS. Desde então, venho me dedicando a criar e desenvolver soluções por meio de interfaces."}
            </p>

            <p className="font-[family-name:var(--font-space)] text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
              {"Gosto de desenvolver e estou sempre apta a aprender novas funcionalidades, ferramentas, ou qualquer outra coisa que seja necessária. Curto desafios e, principalmente, soluções."}
            </p>

            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-4 pt-2 sm:pt-6">
              {[
                { value: "5+", label: "Projetos" },
                { value: "1+", label: "Anos XP" },
                { value: "100%", label: "Dedicação" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex sm:flex-col items-center sm:items-center justify-between sm:justify-center gap-3 sm:gap-0 p-4 sm:p-0 border border-[#6E00B3]/40 sm:border-0 rounded-sm sm:rounded-none bg-[#1A0029]/30 sm:bg-transparent"
                >
                  <p className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#FFD700] order-2 sm:order-1">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-space)] text-sm text-white/60 order-1 sm:order-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
