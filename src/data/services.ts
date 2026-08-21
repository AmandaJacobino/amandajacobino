export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Automação com IA',
    description: 'Automatize processos repetitivos integrando inteligência artificial ao seu fluxo de trabalho.',
    icon: 'Bot',
  },
  {
    id: 2,
    title: 'Integrações de API',
    description: 'Conexão entre sistemas e serviços externos via APIs REST e webhooks.',
    icon: 'Plug',
  },
  {
    id: 3,
    title: 'Sitemap & SEO',
    description: 'Estruturação de sites com foco em visibilidade nos mecanismos de busca.',
    icon: 'Map',
  },
  {
    id: 4,
    title: 'Desenvolvimento Front-end',
    description: 'Interfaces modernas, responsivas e acessíveis com React e Tailwind.',
    icon: 'Monitor',
  },
  {
    id: 5,
    title: 'Desenvolvimento Back-end',
    description: 'APIs e servidores robustos com Python, Node.js e banco de dados SQL.',
    icon: 'Server',
  },
]
