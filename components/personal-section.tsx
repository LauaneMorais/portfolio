"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const lifePhotos = [
  {
    src: "/formatura-me.png",
    alt: "Lauane fora das telas — momento 1",
    label: "Dedicação",
    borderColor: "#E485FF",
    outerColor: "#FFA500",
    rotate: [-1, 1, -1],
  },
  {
    src: "/lawd-cat.jpg",
    alt: "Lauane fora das telas — momento 2",
    label: "Carinho",
    borderColor: "#F09A4A",
    outerColor: "#9715C2",
    rotate: [1, -1, 1],
  },
  {
    src: "/guanabara-me.PNG",
    alt: "Lauane fora das telas — momento 3",
    label: "Inspiração",
    borderColor: "#F04AD7",
    outerColor: "#584AF0",
    rotate: [-0.5, 0.5, -0.5],
  },
]

export function PersonalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="personal"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#3C0061]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-[#2B0040] via-[#4B006E] to-[#7B2CBF]"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="absolute inset-0 opacity-[0.18] hidden sm:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-white/20"
              style={{ top: `${12 + i * 11}%` }}
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <motion.div
          className="absolute -left-20 top-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full border-4 border-[#9B30FF]/45"
          animate={{ scale: [1, 1.15, 1], rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-16 bottom-1/4 w-32 h-32 sm:w-56 sm:h-56 rounded-full border-4 border-[#FF1493]/35"
          animate={{ scale: [1.15, 1, 1.15], rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute left-1/2 top-8 opacity-30 hidden md:block"
          animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 14, repeat: Infinity }}
        >
          <svg width="120" height="120" viewBox="0 0 24 24" fill="#B388D1">
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
          <h2 className="section-title">QUEM SOU EU</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 sm:-mt-2">
            <motion.div
              className="h-1 bg-[#B388D1] w-16 sm:w-24"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <span className="font-[family-name:var(--font-display)] text-[#FF1493] text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
              FORA DAS TELAS?
            </span>
            <motion.div
              className="h-1 bg-[#9B30FF] w-16 sm:w-24"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 px-4 sm:px-0">
            {lifePhotos.map((photo, index) => (
              <motion.div
                key={photo.label}
                initial={{ y: 40, opacity: 0, rotate: index % 2 === 0 ? -3 : 3 }}
                animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative w-full max-w-[340px] mx-auto sm:max-w-none"
              >
                <motion.div
                  className="absolute -inset-3 sm:-inset-4 lg:-inset-5 border-[3px] sm:border-4 opacity-80"
                  style={{ borderColor: photo.outerColor }}
                  animate={{ rotate: photo.rotate }}
                  transition={{ duration: 5 + index, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-1.5 sm:-inset-2 border-[3px] sm:border-4"
                  style={{ borderColor: photo.borderColor }}
                  animate={{ rotate: photo.rotate.map((r) => -r) }}
                  transition={{ duration: 4 + index, repeat: Infinity, delay: 0.3 }}
                />

                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#2D0047] to-[#1A0029] shadow-lg shadow-black/30">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${photo.borderColor}33, transparent)`,
                    }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3 + index, repeat: Infinity }}
                  />
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <svg viewBox="0 0 24 24" fill={photo.borderColor}>
                      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                    </svg>
                  </motion.div>
                </div>

                <motion.p
                  className="font-[family-name:var(--font-bebas)] text-base sm:text-lg md:text-xl mt-4 sm:mt-5 text-center tracking-wider font-bold"
                  style={{ color: photo.borderColor }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {photo.label}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-2 w-full"
          >
            <div className="relative pl-4 sm:pl-5">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#9B30FF]"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <p className="font-[family-name:var(--font-space)] text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed">
                {"Além do código, sou alguém que busca crescer constantemente. Uma das experiências que mais transformaram minha jornada foi fazer parte da Liga Acadêmica de Desenvolvimento Web, na qual atuo como vice-presidente."}
              </p>
            </div>

            <p className="font-[family-name:var(--font-space)] text-sm sm:text-base lg:text-lg text-[#E8D4F8]/85 leading-relaxed">
              {"Gosto de momentos com amigos, com quem eu amo, de aprender coisas fora da área tech e de encontrar inspiração no dia a dia, seja numa conversa, num passeio ou numa pausa."}
            </p>

            <p className="font-[family-name:var(--font-space)] text-sm sm:text-base lg:text-lg text-[#E8D4F8]/85 leading-relaxed">
              {"Essa parte também faz parte de quem sou: alguém curiosa, presente e sempre aberta! Essa forma de ver o mundo também influencia como penso, com atenção, sensibilidade e intenção."}
            </p>

            <motion.div
              className="overflow-hidden mt-2 sm:mt-4 border-y border-[#9B30FF]/50 py-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1].map((i) => (
                  <p
                    key={i}
                    className="font-[family-name:var(--font-display)] text-lg sm:text-2xl text-[#B388D1]/80 font-bold tracking-widest px-4"
                  >
                    Grandes coisas são construídas com dedicação, no código e na vida. ★
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
