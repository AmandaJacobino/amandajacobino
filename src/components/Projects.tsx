import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Projects() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="projetos" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Projetos" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-background p-8 overflow-hidden cursor-default"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="text-xs text-muted font-mono mb-4 block">
                  {String(project.id).padStart(2, '0')}
                </span>

                <h3 className="text-lg font-medium text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-muted/70 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links — revealed on hover */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground hover:text-accent transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-xs tracking-[0.3em] text-muted uppercase">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
