import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
}

export function ImageWithFallback({ src, alt, className = '', fallback }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return fallback ?? <div className="image-fallback">Imagem indisponível</div>
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />
}
