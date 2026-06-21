"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-6 sm:py-8 bg-[#0D0015] border-t border-[#6E00B3]/30 pb-[env(safe-area-inset-bottom)]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-4 md:flex-row md:justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
          >
            <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#FF1493]">
              LAU
            </span>
            <span className="font-[family-name:var(--font-space)] text-white/50 text-xs sm:text-sm">
              © 2026
            </span>
          </motion.div>

          <motion.p
            className="font-[family-name:var(--font-space)] text-white/50 text-xs sm:text-sm text-center max-w-xs sm:max-w-none px-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Feito com <span className="text-[#FF1493]">♥</span> e muito{" "}
            <span className="text-[#FFD700]">código</span>
          </motion.p>

          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.svg
                key={i}
                width="14"
                height="14"
                className="sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill={i === 1 ? "#FF1493" : "#6E00B3"}
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
