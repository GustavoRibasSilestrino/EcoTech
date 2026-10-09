import { Navigate, useParams } from 'react-router-dom'
import BadgeRisco from '../components/BadgeRisco'
import BotaoFavoritar from '../components/BotaoFavoritar'
import Botao from '../components/Botao'
import { classeBioma, siglaDe } from '../utils/especies'
import TextoComGlossario from '../components/TextoComGlossario'
import especies from '../data/especies.json'

export default function EspecieDetalhe() {
  const { id } = useParams()
  const especie = especies.find((e) => e.id === id)

  if (!especie) return <Navigate to="/especies" replace />

  return (
    <article className="detalhe">
      <div className={`detalhe-foto card-vidro ${classeBioma(especie.bioma)}`}>
        {especie.imagem ? (
          <img src={especie.imagem} alt={especie.nome_popular} />
        ) : (
          <span className="monograma grande" aria-hidden="true">
            {siglaDe(especie.nome_popular)}
          </span>
        )}
      </div>

      <div className="detalhe-info">
        <p className="selo-ods">
          {especie.tipo} · {especie.bioma}
        </p>
        <h1>{especie.nome_popular}</h1>
        <p className="cientifico">{especie.nome_cientifico}</p>

        <p className="detalhe-status">
          Situação de conservação: <BadgeRisco risco={especie.risco} status={especie.status} />
        </p>

        <div className="card-vidro texto-leitura">
          <TextoComGlossario texto={especie.descricao} />
          <h2>Alimentação</h2>
          <p>{especie.alimentacao}</p>
          <h2>Como o desmatamento afeta</h2>
          <TextoComGlossario texto={especie.impacto} />
        </div>

        <aside className="curiosidade">
          <strong>Curiosidade</strong>
          <p>{especie.curiosidade}</p>
        </aside>

        <p className="aviso-pequeno">
          O status de conservação muda com o tempo. Consulte a lista oficial mais recente do ICMBio e da IUCN.
        </p>

        <div className="acoes">
          <Botao to="/especies">Voltar ao catálogo</Botao>
          <BotaoFavoritar id={especie.id} nome={especie.nome_popular} comTexto />
        </div>
      </div>
    </article>
  )
}
