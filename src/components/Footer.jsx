import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div>
          <h2 className="footer-titulo">EcoTech</h2>
          <p>Educação ambiental sobre desmatamento e vida terrestre.</p>
        </div>
        <div>
          <h3>ODS</h3>
          <p>
            ODS 15: Vida Terrestre
            <br />
            ODS 4: Educação de Qualidade
          </p>
        </div>
        <div>
          <h3>Navegação</h3>
          <ul>
            <li>
              <Link to="/trilha">Trilha</Link>
            </li>
            <li>
              <Link to="/especies">Espécies</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre o projeto</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Projeto</h3>
          <p>Hackathon Front-end Frameworks · Equipe EcoTech</p>
        </div>
      </div>
    </footer>
  )
}
