import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header Component', () => {
  it('deve renderizar links de navegação', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const homeLink = screen.getByText('Sobre')
    const curricuoLink = screen.getByText('Currículo')
    const projectsLink = screen.getByText('Projetos')

    expect(homeLink).toBeInTheDocument()
    expect(curricuoLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
  })

  it('deve renderizar logo dentro de BrowserRouter', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const logoLink = screen.getByRole('link', { name: /ir para página inicial/i })
    expect(logoLink).toBeInTheDocument()
  })
})
