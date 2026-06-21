"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"

export type ProjectType = "individual" | "collaborative"
export type CompletionStatus = "complete" | "incomplete"

export type Project = {
  id: number
  title: string
  category: string
  description: string
  detailedDescription: string
  tags: string[]
  color: string
  image: string
  githubUrl: string
  projectType: ProjectType
  completionStatus: CompletionStatus
}

type ProjectDetailModalProps = {
  project: Project | null
  onClose: () => void
}

const projectTypeLabels: Record<ProjectType, string> = {
  individual: "Projeto Individual",
  collaborative: "Projeto Colaborativo",
}

const completionStatusLabels: Record<CompletionStatus, string> = {
  complete: "Projeto Completo",
  incomplete: "Projeto Incompleto",
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton
        className="max-h-[90vh] overflow-y-auto border-2 bg-[#1A0029] p-0 sm:max-w-2xl lg:max-w-3xl gap-0"
        style={{ borderColor: project.color }}
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        <div className="relative px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
          <div
            className="relative aspect-video overflow-hidden border"
            style={{ borderColor: `${project.color}50` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain bg-[#0D0015]/40 p-4 sm:p-6"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4 pb-6 sm:px-6 sm:pb-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span
                className="inline-block px-2 py-1 font-[family-name:var(--font-space)] text-[10px] sm:text-xs font-bold text-white"
                style={{ backgroundColor: project.color }}
              >
                {project.category}
              </span>
              <h3
                className="mt-2 font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="px-3 py-1 font-[family-name:var(--font-space)] text-xs border"
                style={{
                  borderColor: project.color,
                  color: project.color,
                  backgroundColor: `${project.color}15`,
                }}
              >
                {projectTypeLabels[project.projectType]}
              </span>
              <span
                className="px-3 py-1 font-[family-name:var(--font-space)] text-xs border"
                style={{
                  borderColor: project.color,
                  color: project.color,
                  backgroundColor: `${project.color}15`,
                }}
              >
                {completionStatusLabels[project.completionStatus]}
              </span>
            </div>
          </div>

          <p className="font-[family-name:var(--font-space)] text-sm sm:text-base text-white/70 leading-relaxed">
            {project.detailedDescription}
          </p>

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

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border-2 px-5 py-2.5 font-[family-name:var(--font-bebas)] text-lg text-white transition-all hover:scale-[1.02]"
            style={{
              borderColor: project.color,
              boxShadow: `0 0 20px ${project.color}30`,
            }}
          >
            VER NO GITHUB
            <ExternalLink className="size-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
