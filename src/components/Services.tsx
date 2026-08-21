import { motion } from 'framer-motion'
import { Bot, Plug, Map, Monitor, Server, Code2 } from 'lucide-react'
import { services } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Plug,
  Map,
  Monitor,
  Server,
  Code2,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Services() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="servicos" className="py-32 px-6 bg-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Serviços" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-6 border border-border hover:border-accent/30 transition-colors duration-300 rounded-sm"
              >
                <div className="mb-5 w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-accent/30 transition-colors duration-300">
                  <Icon size={18} className="text-muted group-hover:text-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
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
