export interface Project {
  id: number
  title: string
  description: string
  stack: string[]
  github?: string
  live?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'HT Estética Automotiva',
    description: 'Landing page para empresa de estética automotiva em Sorocaba/SP. Apresentação de serviços, diferenciais e contato.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/AmandaJacobino/ht-estetica-automotiva',
    live: 'https://ht-estetica-automotiva.vercel.app',
    image: '/images/ht-estetica.png',
  },
  {
    id: 2,
    title: 'Natalia Credidio Studio',
    description: 'Landing page para estúdio de beleza. Portfólio de serviços, galeria e agendamento via WhatsApp.',
    stack: ['TypeScript', 'JavaScript', 'CSS'],
    github: 'https://github.com/AmandaJacobino/nathalia-studio',
    image: '/images/nathalia-studio.png',
  },
]
