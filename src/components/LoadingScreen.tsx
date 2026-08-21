import { motion } from 'framer-motion'

const letters = 'AMANDA JACOBINO'.split('')

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className={`text-2xl font-light tracking-widest text-foreground ${letter === ' ' ? 'w-4' : ''}`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
