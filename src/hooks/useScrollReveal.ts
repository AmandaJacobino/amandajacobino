import { useEffect, useRef } from 'react'
import { useInView, useAnimation, type AnimationControls } from 'framer-motion'

export function useScrollReveal(): [React.RefObject<HTMLDivElement>, AnimationControls] {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return [ref, controls]
}
