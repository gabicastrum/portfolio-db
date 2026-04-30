import './SkillBar.css'

interface SkillBarProps {
  name: string
  level: number
}

const levelDescriptions = {
  1: 'Contato inicial: já teve exposição à tecnologia e compreende seus conceitos básicos, com aplicação guiada em contexto de aprendizado.',
  2: 'Aplicação assistida: consegue executar tarefas simples e contribuir em partes de funcionalidades com orientação ocasional.',
  3: 'Atuação prática: desenvolve funcionalidades completas com autonomia no escopo do dia a dia e participa ativamente de projetos.',
  4: 'Atuação sólida em ambiente real: resolve problemas mais complexos, aplica boas práticas e contribui de forma consistente em sistemas em produção.',
  5: 'Atuação de referência em contexto de equipe: conduz práticas técnicas dentro do time, apoia decisões e facilita colaboração em atividades de desenvolvimento.',
}

export function SkillBar({ name, level }: SkillBarProps) {
  const normalizedLevel = Math.min(5, Math.max(1, level))

  return (
    <div className="skill-item">
      <div className="skill-content">
        <span className="skill-name">{name}</span>
        <div className="skill-dots">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`skill-dot ${index < normalizedLevel ? 'filled' : ''} ${index === normalizedLevel - 1 ? 'tooltip-trigger' : ''}`}
            >
              {index === normalizedLevel - 1 && (
                <div className="tooltip-content">
                  {levelDescriptions[normalizedLevel as keyof typeof levelDescriptions]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
