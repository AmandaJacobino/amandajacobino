import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function About() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="sobre" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Sobre" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Photo placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-full border border-border bg-card flex items-center justify-center">
              <span className="text-xs text-muted tracking-widest">FOTO</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-light text-foreground leading-snug">
              Olá, sou a Amanda.
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Texto em breve — aqui você vai contar um pouco sobre sua trajetória, motivações e o que te levou ao desenvolvimento.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Localizada em Sorocaba, SP — disponível para projetos remotos.
            </p>
          </motion.div>
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
