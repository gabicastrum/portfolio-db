import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home View', () => {
  it('deve renderizar seção hero com saudação e nome', () => {
    render(<Home />)

    const greeting = screen.getByText('Olá, meu nome é')
    const name = screen.getByText('Gabriela de Castro Laurindo')

    expect(greeting).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })

  it('deve renderizar descrição de herói', () => {
    render(<Home />)

    const description = screen.getByText('Sou trainee de Desenvolvimento de Software na DBServer.')

    expect(description).toBeInTheDocument()
  })
})
