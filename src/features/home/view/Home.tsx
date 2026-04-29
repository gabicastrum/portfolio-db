import { SkillBar } from '@/features/home/components/skill-bar/SkillBar';
import { HOME_CONTENT } from '@/features/home/model/homeContent';
import { SKILLS } from '@/features/home/model/skills';

import './Home.css';
import profile from '@/assets/images/img-perfil.png';
import { ImageWithFallback } from '@/shared/components/ImageWithFallback/ImageWithFallback';

export function Home() {
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
          <h3>{HOME_CONTENT.skills.title}</h3>

          <div className="skills-grid">
            <div>
              {SKILLS.slice(0, 4).map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>

            <div>
              {SKILLS.slice(4).map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}