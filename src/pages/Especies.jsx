import { useEffect, useMemo, useState } from 'react'
import BuscaAutocomplete from '../components/BuscaAutocomplete'
import CardEspecie from '../components/CardEspecie'
import Loader from '../components/Loader'
import especies from '../data/especies.json'

const BIOMAS = ['Todos', ...new Set(especies.map((e) => e.bioma))]
const TIPOS = ['Todos', 'Fauna', 'Flora']

export default function Especies() {
  const [carregando, setCarregando] = useState(true)
  const [busca, setBusca] = useState('')
  const [bioma, setBioma] = useState('Todos')
  const [tipo, setTipo] = useState('Todos')
  const [soAmeacadas, setSoAmeacadas] = useState(false)

  // pequena espera para exibir o estado de carregamento
  useEffect(() => {
    const t = window.setTimeout(() => setCarregando(false), 350)
    return () => window.clearTimeout(t)
  }, [])

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return especies.filter(
      (e) =>
        (!termo || e.nome_popular.toLowerCase().includes(termo) || e.nome_cientifico.toLowerCase().includes(termo)) &&
        (bioma === 'Todos' || e.bioma === bioma) &&
        (tipo === 'Todos' || e.tipo === tipo) &&
        (!soAmeacadas || e.risco !== 'estavel'),
    )
  }, [busca, bioma, tipo, soAmeacadas])

  function limpar() {
    setBusca('')
    setBioma('Todos')
    setTipo('Todos')
    setSoAmeacadas(false)
  }

  return (
    <>
      <h1>Espécies ameaçadas pelo desmatamento</h1>
      <p className="subtitulo">Conheça animais e plantas que dependem das florestas brasileiras.</p>

      <section className="filtros card-vidro" aria-label="Filtros">
        <BuscaAutocomplete especies={especies} valor={busca} onChange={setBusca} />

        <div className="filtro-grupo">
          <span className="filtro-rotulo">Tipo</span>
          {TIPOS.map((t) => (
            <button key={t} type="button" className={`tag ${tipo === t ? 'ativa' : ''}`} aria-pressed={tipo === t} onClick={() => setTipo(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="filtro-grupo">
          <span className="filtro-rotulo">Bioma</span>
          {BIOMAS.map((b) => (
            <button key={b} type="button" className={`tag ${bioma === b ? 'ativa' : ''}`} aria-pressed={bioma === b} onClick={() => setBioma(b)}>
              {b}
            </button>
          ))}
        </div>

        <div className="filtro-grupo">
          <span className="filtro-rotulo">Situação</span>
          <button type="button" className={`tag ${soAmeacadas ? 'ativa' : ''}`} aria-pressed={soAmeacadas} onClick={() => setSoAmeacadas((v) => !v)}>
            Ameaçadas de extinção
          </button>
        </div>
      </section>

      {carregando ? (
        <Loader texto="Carregando espécies..." />
      ) : filtradas.length === 0 ? (
        <div className="card-vidro vazio">
          <p>Nenhuma espécie encontrada com esses filtros.</p>
          <button type="button" className="btn btn-vidro btn-md" onClick={limpar}>
            Limpar filtros
          </button>
        </div>
      ) : (
        <>
          <p className="contagem" aria-live="polite">
            {filtradas.length} {filtradas.length === 1 ? 'espécie' : 'espécies'}
          </p>
          <div className="grade cards">
            {filtradas.map((e) => (
              <CardEspecie key={e.id} especie={e} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
