import { SkillBar } from '@/features/home/components/skill-bar/SkillBar'
import { type Skill, type SkillCategory } from '@/features/home/model/types'
import './SkillsColumn.css'

const COLUMN_LABELS: Record<SkillCategory, string> = {
  backend:      'Back-end',
  frontend:     'Front-end',
  ferramentas:  'Ferramentas & Práticas',
}

interface SkillsColumnProps {
  category: SkillCategory
  skills: Skill[]
}

export function SkillsColumn({ category, skills }: SkillsColumnProps) {
  return (
    <div className="skills-column">
      <h4 className="skills-column-title">{COLUMN_LABELS[category]}</h4>
      <div className="skills-column-list">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  )
}