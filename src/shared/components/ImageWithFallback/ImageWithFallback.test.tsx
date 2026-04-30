import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ImageWithFallback } from './ImageWithFallback'

describe('ImageWithFallback Component', () => {
  it('deve renderizar a imagem com src correto', () => {
    render(<ImageWithFallback src="/images/test.png" alt="Imagem de teste" />)

    const image = screen.getByAltText('Imagem de teste') as HTMLImageElement
    expect(image).toBeInTheDocument()
    expect(image.src).toContain('test.png')
  })

  it('deve exibir fallback quando houver erro na carregamento da imagem', () => {
    render(<ImageWithFallback src="/images/test.png" alt="Imagem de teste" />)

    const image = screen.getByAltText('Imagem de teste')
    fireEvent.error(image)

    const fallbackText = screen.getByText('Imagem indisponível')
    expect(fallbackText).toBeInTheDocument()
  })
})
