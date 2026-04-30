import './Header.css'
import { Link, useLocation } from 'react-router-dom'

import githubIcon from '@/assets/icons/github.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import mailIcon from '@/assets/icons/email.svg'
import logo from '@/assets/images/logo-db.png'
import { CopyEmailButton } from '@/features/home/components/copy-email-button/CopyEmailButton'

export const Header = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header">
      <Link to="/" className="logo-button" aria-label="Ir para página inicial">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <nav className="nav-links">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          Sobre
        </Link>

        <Link to="/details" className={`nav-item ${isActive('/details') ? 'active' : ''}`}>
          Currículo
        </Link>

        <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
          Projetos
        </Link>
      </nav>

      <div className="social-icons">
        <a href="https://github.com/gabicastrum" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Github" className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/gabrieladecastrolaurindo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
        </a>

        <CopyEmailButton email="gabriela.laurindo@db.tec.br">
          <img src={mailIcon} alt="Copiar email" className="social-icon" />
        </CopyEmailButton>
      </div>
    </header>
  )
}
