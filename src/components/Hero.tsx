import { motion } from 'framer-motion'

const techStack = ['TypeScript', 'JavaScript', 'CSS', 'Tailwind', 'Python', 'SQL']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 1.8 },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="mx-auto max-w-6xl w-full pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-[0.3em] text-muted uppercase mb-6"
          >
            Desenvolvedora Jr. Full Stack
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-light leading-none tracking-tight text-foreground mb-8"
          >
            Amanda
            <br />
            <span className="text-muted">Jacobino</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-12"
          >
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 border border-border text-muted rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href="#projetos"
              className="group flex items-center gap-2 text-sm font-medium text-foreground border border-foreground px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Ver Projetos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contato"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent to-border"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
