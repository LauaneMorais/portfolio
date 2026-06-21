"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ProjectDetailModal, type Project } from "@/components/project-detail-modal"

const projects: Project[] = [
  {
    id: 1,
    title: "LEPFS",
    category: "LANDING PAGE",
    description:
      "Landing Page interativa para o Laboratório de Farmácia da Universidade Federal de Sergipe.",
    detailedDescription:
      "Desenvolvimento de uma landing page completa para o Laboratório de Farmácia da UFS, com foco em apresentar serviços, equipe e informações acadêmicas. O projeto incluiu layout responsivo, animações CSS e integração com formulários de contato.",
    tags: ["JavaScript", "HTML5", "CSS3", "GIT"],
    color: "#FF1493",
    image: "/lepfs-title.png",
    githubUrl: "https://github.com/LauaneMorais/landing-page-LEPFS.git",
    projectType: "collaborative",
    completionStatus: "complete",
  },
  {
    id: 2,
    title: "LIBIC",
    category: "WEB APP",
    description:
      "Aplicação para a Liga Acadêmica de Bioquímica Clínica, com páginas, animações e interação.",
    detailedDescription:
      "Aplicação web para a Liga Acadêmica de Bioquímica Clínica, com múltiplas páginas informativas, animações de transição e elementos interativos. O design foi prototipado no Figma antes da implementação.",
    tags: ["JavaScript", "HTML5", "CSS3", "GIT", "FIGMA"],
    color: "#00D4FF",
    image: "/libic-title.png",
    githubUrl: "https://github.com/kauanderlon/desenvolvimento-pagina-libic.git",
    projectType: "collaborative",
    completionStatus: "incomplete",
  },
  {
    id: 3,
    title: "SIM MAP",
    category: "WEB APP",
    description:
      "Aplicação de gerenciamento de membros para organizações, com páginas, animações e interação.",
    detailedDescription:
      "Sistema de gerenciamento de membros para organizações acadêmicas, com autenticação, painel administrativo e CRUD completo. Desenvolvido em Next.js, com um ETL de dados não estruturados do Notion, com Python e Pandas para servir ao FrontEnd.",
    tags: ["React", "ETL", "Python"],
    color: "#FFD700",
    image: "/sim-map-title.png",
    githubUrl: "https://github.com/LauaneMorais/SimMAP.git",
    projectType: "collaborative",
    completionStatus: "complete",
  },
  {
    id: 4,
    title: "Ascensão Olimpiana",
    category: "JAVA GUI",
    description:
      "Jogo avaliativo para a disciplina de Programação Orientada a Objetos.",
    detailedDescription:
      "Jogo educativo desenvolvido em Java com JavaSwing para avaliação na disciplina de POO. Inclui mecânicas de RPG, sistema de ataque, defesa, e buffs, além de interface gráfica e personagens temáticos.",
    tags: ["Java", "JavaSwing", "Game Design", "GIT"],
    color: "#9B30FF",
    image: "/ao-title.png",
    githubUrl: "https://github.com/LauaneMorais/ascensao-olimpiana.git",
    projectType: "individual",
    completionStatus: "complete",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="section-shell min-h-0 lg:min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full sm:w-1/3 h-1/4 sm:h-full bg-[#6E00B3] opacity-30 sm:opacity-100"
          initial={{ x: "100%" }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ duration: 0.8 }}
        />

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block"
            style={{
              right: `${10 + i * 8}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <div className="relative inline-block w-full sm:w-auto text-center sm:text-left">
            <h2 className="section-title">PROJETOS</h2>
            <motion.div
              className="h-2 bg-[#FF1493] mx-auto sm:mx-0 -mt-1 max-w-[12rem] sm:max-w-[60%]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.span
              className="inline-block sm:absolute sm:-right-4 sm:-top-4 font-[family-name:var(--font-display)] text-[#FFD700] text-xl sm:text-2xl font-bold mt-2 sm:mt-0"
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: -20 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ★
            </motion.span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 md:grid md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              onTouchStart={() => setActiveProject(project.id)}
              onTouchEnd={() => setActiveProject(null)}
              className="relative group w-full"
            >
              <motion.div
                className="relative overflow-hidden bg-[#1A0029] border-2 w-full"
                style={{ borderColor: project.color }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 40px ${project.color}40`,
                }}
              >
                <div
                  className="h-44 sm:h-52 lg:h-56 relative overflow-hidden"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40 0%, transparent 50%, ${project.color}20 100%)`,
                    }}
                    animate={{
                      opacity: activeProject === project.id ? 1 : 0.5,
                    }}
                  />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6 z-[1]"
                  />

                  <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 font-[family-name:var(--font-bebas)] text-5xl sm:text-8xl opacity-20"
                    style={{ color: project.color }}
                    animate={{
                      scale: activeProject === project.id ? 1.1 : 1,
                    }}
                  >
                    0{project.id}
                  </motion.div>

                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 z-20"
                    style={{ backgroundColor: project.color }}
                  >
                    <span className="font-[family-name:var(--font-space)] text-[10px] sm:text-xs text-white font-bold">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4">
                  <h3
                    className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl lg:text-4xl transition-colors"
                    style={{
                      color: activeProject === project.id ? project.color : "#FFFFFF",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="font-[family-name:var(--font-space)] text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="w-fit px-4 py-2 font-[family-name:var(--font-bebas)] text-base sm:text-lg border-2 transition-all hover:scale-[1.03]"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                      boxShadow:
                        activeProject === project.id
                          ? `0 0 16px ${project.color}40`
                          : "none",
                    }}
                  >
                    VER MAIS
                  </button>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-[family-name:var(--font-space)] border"
                        style={{
                          borderColor: `${project.color}50`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  style={{ backgroundColor: project.color }}
                  initial={{ width: 0 }}
                  animate={{ width: activeProject === project.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4"
                style={{ backgroundColor: project.color }}
                animate={{
                  rotate: activeProject === project.id ? 45 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
