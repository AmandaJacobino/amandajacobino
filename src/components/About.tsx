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
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* Photo placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <img
              src="/images/photo-about.webp"
              alt="Amanda Jacobino"
              className="w-80 h-80 rounded-full object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-3xl font-light text-foreground leading-snug">
              Olá, Mundo!
            </h2>

            <p className="text-base text-muted leading-relaxed text-justify">
              Sou desenvolvedora Full Stack, formada no curso de Análise e Desenvolvimento de Sistemas com experiência prática em React, Next.js, TypeScript, Node.js, Supabase, Tailwind CSS e automação com IA. Atuo como Analista de Suporte ao Cliente Jr na Stattus4, onde crio aplicações completas – do front-end responsivo à integração com APIs e geração de documentos PDF pixel-perfect.
            </p>

            <p className="text-base text-muted leading-relaxed text-justify">
              Tenho domínio em engenharia de prompts (zero-shot, few-shot, RAG, etc.) e desenvolvimento de agentes de IA. Fui 1º lugar individual no Bootcamp de IA da Stattus4, com um agente autônomo para detecção e correção de bugs.
            </p>

            <p className="text-base text-muted leading-relaxed text-justify">
              Também desenvolvo landing pages para negócios locais, sempre pensando em SEO, design responsivo e conversão. Adoro unir lógica, criatividade e tecnologia para resolver problemas reais.
            </p>

            <p className="text-xs text-muted/60 leading-relaxed">
              Localizada em Sorocaba, SP.
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
