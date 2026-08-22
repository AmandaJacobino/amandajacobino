import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Projects() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="projetos" className="py-32 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Projetos" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col"
            >
              {/* Imagem flutuante */}
              <div className="mb-8 overflow-visible">
                {project.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-xl shadow-2xl
                               group-hover:-translate-y-3 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div
                    className="w-full aspect-video bg-gray-100 rounded-xl shadow-2xl flex items-center justify-center
                                group-hover:-translate-y-3 transition-transform duration-500 ease-out"
                  >
                    <span className="text-xs tracking-widest text-gray-400 uppercase">Imagem em breve</span>
                  </div>
                )}
              </div>

              {/* Info do projeto */}
              <div className="flex flex-col flex-1">
                <span className="text-xs font-mono text-gray-400 mb-3">
                  {String(project.id).padStart(2, '0')}
                </span>

                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-600 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-500 transition-all duration-300 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      Ver site
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">{label}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
