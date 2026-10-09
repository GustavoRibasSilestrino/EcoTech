import { useApp } from '../context/AppContext'
import Icone from './Icone'

// Coração que alterna entre preenchido e vazio. Salva no localStorage via contexto.
export default function BotaoFavoritar({ id, nome, comTexto = false }) {
  const { favoritos, alternarFavorito } = useApp()
  const ativo = favoritos.includes(id)

  return (
    <button
      type="button"
      className={`btn-favorito ${ativo ? 'ativo' : ''} ${comTexto ? 'com-texto' : ''}`}
      aria-pressed={ativo}
      aria-label={ativo ? `Remover ${nome} dos favoritos` : `Favoritar ${nome}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        alternarFavorito(id)
      }}
    >
      <Icone nome="coracao" preenchido={ativo} />
      {comTexto && <span>{ativo ? 'Favoritado' : 'Favoritar'}</span>}
    </button>
  )
}
