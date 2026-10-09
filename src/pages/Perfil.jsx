import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'
import BarraProgresso from '../components/BarraProgresso'
import Botao from '../components/Botao'
import Icone from '../components/Icone'
import modulos from '../data/modulos.json'
import especies from '../data/especies.json'
import { useApp } from '../context/AppContext'
import { SELOS } from '../utils/gamificacao'

export default function Perfil() {
  const { perfil, pontos, nivel, concluidos, selos, favoritos, reiniciarProgresso } = useApp()
  const [confirmando, setConfirmando] = useState(false)
  const favoritas = especies.filter((e) => favoritos.includes(e.id))

  return (
    <>
      <section className="card-vidro perfil-topo">
        <Avatar nome={perfil.nome} cor={perfil.avatar} tamanho={88} />
        <div className="perfil-dados">
          <h1>{perfil.nome}</h1>
          <p>
            Nível {nivel.nivel} · {nivel.nome}
          </p>
          <BarraProgresso valor={nivel.noNivel} total={50} rotulo="Progresso até o próximo nível" />
        </div>
        <ul className="perfil-numeros">
          <li>
            <strong>{pontos}</strong>
            <span>pontos</span>
          </li>
          <li>
            <strong>
              {Object.keys(concluidos).length}/{modulos.length}
            </strong>
            <span>módulos</span>
          </li>
          <li>
            <strong>{selos.length}</strong>
            <span>selos</span>
          </li>
        </ul>
      </section>

      <h2 className="titulo-secao">Conquistas</h2>
      <div className="grade selos">
        {SELOS.map((s) => {
          const ganho = selos.includes(s.id)
          return (
            <article key={s.id} className={`selo card-vidro ${ganho ? 'ganho' : 'bloqueado'}`}>
              <span className="selo-icone">
                <Icone nome={ganho ? s.icone : 'cadeado'} tamanho={30} />
              </span>
              <h3>{s.nome}</h3>
              <p>{s.criterio}</p>
              <span className="sr-only">{ganho ? 'Conquistado' : 'Bloqueado'}</span>
            </article>
          )
        })}
      </div>

      <h2 className="titulo-secao">Espécies favoritas</h2>
      {favoritas.length === 0 ? (
        <p className="card-vidro vazio-pequeno">
          Nenhuma ainda. <Link to="/especies">Explore o catálogo</Link>.
        </p>
      ) : (
        <ul className="favoritas-lista">
          {favoritas.map((e) => (
            <li key={e.id}>
              <Link to={`/especie/${e.id}`} className="tag">
                {e.nome_popular}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="acoes">
        <Botao to="/perfil/criar">Editar perfil</Botao>
        {confirmando ? (
          <>
            <Botao
              variante="perigo"
              onClick={() => {
                reiniciarProgresso()
                setConfirmando(false)
              }}
            >
              Confirmar reinício
            </Botao>
            <Botao onClick={() => setConfirmando(false)}>Cancelar</Botao>
          </>
        ) : (
          <Botao onClick={() => setConfirmando(true)}>Reiniciar progresso</Botao>
        )}
      </div>
    </>
  )
}
