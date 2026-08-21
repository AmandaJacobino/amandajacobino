import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/amandajacobino',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/amandajacobino',
    icon: Github,
  },
  {
    label: 'E-mail',
    href: 'mailto:seuemail@email.com',
    icon: Mail,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Contact() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="contato" className="py-32 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Contato" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-light text-gray-900 mb-4"
          >
            Vamos trabalhar juntos?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 leading-relaxed mb-12"
          >
            Disponível para freelance, projetos e oportunidades. Entre em contato pelo canal de sua preferência.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <span className="w-8 h-8 flex items-center justify-center border border-gray-200 group-hover:border-gray-400 transition-colors duration-300 rounded-sm">
                  <Icon size={14} />
                </span>
                {label}
              </a>
            ))}
          </motion.div>
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
