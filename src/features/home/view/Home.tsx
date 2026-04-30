import { HOME_CONTENT } from '@/features/home/model/homeContent'
import { SKILLS } from '@/features/home/model/skills'

import './Home.css'
import profile from '@/assets/images/img-perfil.png'
import { ImageWithFallback } from '@/shared/components/ImageWithFallback/ImageWithFallback'
import { useEffect, useState } from 'react'
import { SkillsColumn } from '../components/skills-column/SkillsColumn'
import type { SkillCategory } from '../model/types'

export function Home() {
  const [showHint, setShowHint] = useState(true)
  const CATEGORIES: SkillCategory[] = ['backend', 'frontend', 'ferramentas']

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="portfolio-container">
      <section className="hero">
        <div className="hero-content">
          <h1>{HOME_CONTENT.hero.greeting}</h1>
          <h2>{HOME_CONTENT.hero.name}</h2>
          <p>{HOME_CONTENT.hero.description}</p>
        </div>

        <div className="hero-image">
          <ImageWithFallback
            src={profile}
            alt={HOME_CONTENT.hero.imageAlt}
            className="profile-photo"
            fallback={<div className="image-fallback">Sem imagem</div>}
          />
        </div>
      </section>

      <section className="about-skills-container" id="sobre">
        <div className="about-section">
          <div className="about-content">
            <h3>{HOME_CONTENT.about.title}</h3>

            {HOME_CONTENT.about.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className={`skills-title-wrapper ${showHint ? 'show' : ''}`}>
            <div className="skills-title-hover-area">
              <h3>{HOME_CONTENT.skills.title}</h3>
              <p className="skills-hint">
                Passe o mouse sobre os níveis para ver o significado de cada pontuação.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            {CATEGORIES.map((cat) => (
              <SkillsColumn
                key={cat}
                category={cat}
                skills={SKILLS.filter((s) => s.category === cat)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
