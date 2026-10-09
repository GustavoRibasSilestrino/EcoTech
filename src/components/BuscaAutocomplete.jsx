import { useId, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Campo de busca que sugere nomes de espécies enquanto o usuário digita.
export default function BuscaAutocomplete({ especies, valor, onChange }) {
  const [aberto, setAberto] = useState(false)
  const navegar = useNavigate()
  const listaId = useId()

  const sugestoes = useMemo(() => {
    const termo = valor.trim().toLowerCase()
    if (!termo) return []
    return especies.filter((e) => e.nome_popular.toLowerCase().includes(termo)).slice(0, 5)
  }, [especies, valor])

  return (
    <div className="busca">
      <label htmlFor="busca-especie" className="sr-only">
        Buscar espécie pelo nome
      </label>
      <input
        id="busca-especie"
        type="search"
        placeholder="Buscar espécie pelo nome"
        value={valor}
        autoComplete="off"
        role="combobox"
        aria-expanded={aberto && sugestoes.length > 0}
        aria-controls={listaId}
        onChange={(e) => {
          onChange(e.target.value)
          setAberto(true)
        }}
        onFocus={() => setAberto(true)}
        onBlur={() => window.setTimeout(() => setAberto(false), 150)}
        onKeyDown={(e) => e.key === 'Escape' && setAberto(false)}
      />
      {aberto && sugestoes.length > 0 && (
        <ul className="busca-lista" id={listaId} role="listbox">
          {sugestoes.map((s) => (
            <li key={s.id} role="option" aria-selected="false">
              <button type="button" onMouseDown={() => navegar(`/especie/${s.id}`)}>
                {s.nome_popular}
                <small>{s.bioma}</small>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
