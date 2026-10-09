import { Link } from 'react-router-dom'
import BadgeRisco from './BadgeRisco'
import BotaoFavoritar from './BotaoFavoritar'
import { classeBioma, siglaDe } from '../utils/especies'

// Cartão reutilizável de espécie. Se "imagem" estiver preenchida no JSON, usa a foto; senão, um monograma.
export default function CardEspecie({ especie }) {
  return (
    <article className="card-especie">
      <Link to={`/especie/${especie.id}`} className="card-especie-link" aria-label={`Ver detalhes de ${especie.nome_popular}`}>
        <div className={`card-especie-topo ${classeBioma(especie.bioma)}`}>
          {especie.imagem ? (
            <img src={especie.imagem} alt={especie.nome_popular} loading="lazy" />
          ) : (
            <span className="monograma" aria-hidden="true">
              {siglaDe(especie.nome_popular)}
            </span>
          )}
          <BadgeRisco risco={especie.risco} status={especie.status} />
        </div>
        <div className="card-especie-corpo">
          <h3>{especie.nome_popular}</h3>
          <p className="cientifico">{especie.nome_cientifico}</p>
          <p className="meta">
            {especie.tipo} · {especie.bioma}
          </p>
        </div>
      </Link>
      <div className="card-especie-fav">
        <BotaoFavoritar id={especie.id} nome={especie.nome_popular} />
      </div>
    </article>
  )
}
