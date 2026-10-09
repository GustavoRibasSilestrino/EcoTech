import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Avatar from './Avatar'
import Icone from './Icone'

const LINKS = [
  { to: '/', rotulo: 'Início', fim: true },
  { to: '/trilha', rotulo: 'Trilha' },
  { to: '/especies', rotulo: 'Espécies' },
  { to: '/favoritos', rotulo: 'Favoritos' },
  { to: '/ranking', rotulo: 'Ranking' },
  { to: '/perfil', rotulo: 'Perfil' },
  { to: '/sobre', rotulo: 'Sobre' },
]

// Cabeçalho transparente (vidro) com menu hambúrguer no celular.
export default function Navbar() {
  // o menu fica aberto só na página em que foi aberto; ao navegar, fecha sozinho
  const { pathname } = useLocation()
  const [abertoEm, setAbertoEm] = useState(null)
  const aberto = abertoEm === pathname
  const { perfil, pontos, nivel } = useApp()

  return (
    <header className="navbar">
      <div className="navbar-conteudo">
        <Link to="/" className="logo" aria-label="EcoTech, página inicial">
          <img src="/logo.png" alt="" className="logo-img" />
          EcoTech
        </Link>

        <button
          type="button"
          className="hamburguer"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAbertoEm(aberto ? null : pathname)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="menu-principal"
          className={`menu ${aberto ? 'aberto' : ''}`}
          aria-label="Principal"
          onClick={() => setAbertoEm(null)}
        >
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.fim}>
              {l.rotulo}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-extra">
          {perfil ? (
            <Link to="/perfil" className="conta" aria-label={`Minha conta: ${perfil.nome}, nível ${nivel.nivel}, ${pontos} pontos`} title={perfil.nome}>
              <Avatar nome={perfil.nome} cor={perfil.avatar} tamanho={34} />
            </Link>
          ) : (
            <Link to="/perfil/criar" className="conta conta-vazia" aria-label="Criar perfil" title="Criar perfil">
              <Icone nome="usuario" tamanho={20} />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
