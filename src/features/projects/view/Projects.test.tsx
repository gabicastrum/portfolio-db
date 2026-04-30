import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import * as projectsViewModel from '../useProjectsViewModel'

const mockProjects = [
  {
    id: '1',
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    tags: ['React', 'TypeScript'],
    image: '/images/project1.png',
    githubUrl: 'https://github.com/example/project1',
    liveUrl: 'https://example.com/project1',
  },
  {
    id: '2',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    tags: ['Node.js', 'Express'],
    image: '/images/project2.png',
    githubUrl: 'https://github.com/example/project2',
    liveUrl: 'https://example.com/project2',
  },
]

describe('Projects View', () => {
  it('deve renderizar lista de projetos com paginação', () => {
    vi.spyOn(projectsViewModel, 'useProjectsViewModel').mockReturnValue({
      projects: mockProjects,
      currentPage: 1,
      totalPages: 2,
      setCurrentPage: vi.fn(),
    })

    render(<Projects />)

    const title = screen.getByText('Meus Projetos')
    const project1 = screen.getByText('Projeto 1')
    const project2 = screen.getByText('Projeto 2')

    expect(title).toBeInTheDocument()
    expect(project1).toBeInTheDocument()
    expect(project2).toBeInTheDocument()
  })

  it('deve renderizar página com lista vazia de projetos', () => {
    vi.spyOn(projectsViewModel, 'useProjectsViewModel').mockReturnValue({
      projects: [],
      currentPage: 1,
      totalPages: 0,
      setCurrentPage: vi.fn(),
    })

    render(<Projects />)

    const title = screen.getByText('Meus Projetos')
    expect(title).toBeInTheDocument()
  })
})
