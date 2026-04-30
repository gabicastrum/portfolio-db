export type SkillCategory = 'backend' | 'frontend' | 'ferramentas'

export interface Skill {
  name: string
  level: number
  category: SkillCategory
}