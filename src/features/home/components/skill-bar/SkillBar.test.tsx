import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillBar } from './SkillBar';

describe('SkillBar Component', () => {
  it('deve renderizar a barra de habilidade com nome e nível', () => {
    render(
      <SkillBar
        name="React"
        level={4}
      />
    );
    
    const skillName = screen.getByText('React');
    expect(skillName).toBeInTheDocument();
  });

  it('deve normalizar nível maior que 5 para 5', () => {
    render(
      <SkillBar
        name="TypeScript"
        level={10}
      />
    );
    
    const skillName = screen.getByText('TypeScript');
    expect(skillName).toBeInTheDocument();
  });
});
