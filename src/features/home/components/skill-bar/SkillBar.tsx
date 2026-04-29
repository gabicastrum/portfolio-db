import './SkillBar.css';

interface SkillBarProps {
  name: string;
  level: number;
}

const levelDescriptions = {
  1: 'Básico: Conhecimento dos conceitos fundamentais e capacidade de realizar tarefas simples com apoio.',
  2: 'Básico + Prática: Capacidade de desenvolver funcionalidades simples de forma independente, com apoio pontual.',
  3: 'Intermediário: Autonomia para construir funcionalidades completas e resolver problemas com pouca supervisão.',
  4: 'Avançado: Domínio consistente da tecnologia, aplicando boas práticas e resolvendo problemas complexos.',
  5: 'Especialista: Profundo domínio técnico, com capacidade de tomar decisões arquiteturais e orientar outros desenvolvedores.',
};

export function SkillBar({ name, level }: SkillBarProps) {
  const normalizedLevel = Math.min(5, Math.max(1, level));
  
  return (
    <div className="skill-item">
      <div className="skill-content">
        <span className="skill-name">{name}</span>
        <div className="skill-dots">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`skill-dot ${index < normalizedLevel ? 'filled' : ''} ${index === normalizedLevel - 1 ? 'tooltip-trigger' : ''}`}
              title={index === normalizedLevel - 1 ? levelDescriptions[normalizedLevel as keyof typeof levelDescriptions] : ''}
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
  );
}
