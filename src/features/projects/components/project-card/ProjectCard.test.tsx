import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'

const mockProject = {
  id: '1',
  title: 'Portfolio App',
  description: 'Uma aplicação de portfólio pessoal',
  tags: ['React', 'TypeScript', 'Vite'],
  image: '/images/project.png',
  githubUrl: 'https://github.com/example',
  liveUrl: 'https://example.com',
}

describe('ProjectCard Component', () => {
  it('deve renderizar o cartão de projeto com título, descrição e tags', () => {
    render(<ProjectCard {...mockProject} />)

    const title = screen.getByText('Portfolio App')
    const description = screen.getByText('Uma aplicação de portfólio pessoal')
    const tag1 = screen.getByText('React')
    const tag2 = screen.getByText('TypeScript')
    const tag3 = screen.getByText('Vite')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tag1).toBeInTheDocument()
    expect(tag2).toBeInTheDocument()
    expect(tag3).toBeInTheDocument()
  })

  it('deve renderizar cartão sem imagem quando não fornecida', () => {
    const projectWithoutImage = { ...mockProject, image: undefined }

    render(<ProjectCard {...projectWithoutImage} />)

    const title = screen.getByText('Portfolio App')
    expect(title).toBeInTheDocument()
  })
})
