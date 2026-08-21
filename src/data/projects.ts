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
    title: 'Projeto 01',
    description: 'Descrição do projeto em breve.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/amandajacobino',
  },
  {
    id: 2,
    title: 'Projeto 02',
    description: 'Descrição do projeto em breve.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/amandajacobino',
  },
  {
    id: 3,
    title: 'Projeto 03',
    description: 'Descrição do projeto em breve.',
    stack: ['JavaScript', 'Node.js', 'CSS'],
    github: 'https://github.com/amandajacobino',
  },
]
