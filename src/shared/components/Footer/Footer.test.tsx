import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('deve renderizar footer com copyright e link GitHub', () => {
    render(<Footer />)

    const copyrightText = screen.getByText(/2026 Gabriela de Castro Laurindo/i)
    const githubLink = screen.getByText('Ver código no GitHub')

    expect(copyrightText).toBeInTheDocument()
    expect(githubLink).toBeInTheDocument()
  })

  it('o link GitHub deve abrir em nova aba', () => {
    render(<Footer />)

    const githubLink = screen.getByText('Ver código no GitHub') as HTMLAnchorElement

    expect(githubLink.target).toBe('_blank')
    expect(githubLink.rel).toBe('noreferrer')
  })
})
