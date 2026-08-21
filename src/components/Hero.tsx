import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techStack = ['TypeScript', 'JavaScript', 'CSS', 'Tailwind', 'Python', 'SQL']

const leftVariants = {
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

const tagVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.8 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Hero() {
  const rightRef = useRef<HTMLDivElement>(null!)
  const isInView = useInView(rightRef, { once: true })

  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="mx-auto max-w-6xl w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">

          {/* Coluna esquerda */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-[0.3em] text-muted uppercase mb-6"
            >
              Desenvolvedora Jr. Full Stack
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-8xl lg:text-9xl font-light leading-none tracking-tight text-foreground mb-12"
            >
              Amanda
              <br />
              <span className="text-muted">Jacobino</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="group flex items-center gap-2 text-sm font-medium text-foreground border border-foreground px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Ver Projetos
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contato"
                className="text-sm font-medium text-foreground border border-border px-6 py-3 rounded-full hover:border-accent transition-all duration-300"
              >
                Entrar em contato
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna direita */}
          <div
            ref={rightRef}
            className="flex flex-col justify-between h-full py-4 lg:min-h-[480px]"
          >
            {/* Tech tags */}
            <ul className="flex flex-col divide-y divide-border">
              {techStack.map((tech, i) => (
                <motion.li
                  key={tech}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="flex items-center gap-4 py-4 group cursor-default"
                >
                  <span className="text-xs font-mono text-muted/30 group-hover:text-muted/70 transition-colors duration-300 w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-light text-muted group-hover:text-foreground transition-colors duration-300 flex-1">
                    {tech}
                  </span>
                  <motion.div
                    className="h-px bg-border group-hover:bg-accent/40 transition-colors duration-300 flex-1 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + i * 0.08 + 0.2 }}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Scroll label */}
            <motion.p
              className="text-xs tracking-[0.25em] text-muted uppercase text-right mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              Role para explorar ↓
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
