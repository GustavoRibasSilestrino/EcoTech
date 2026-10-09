import { useMemo, useState } from 'react'
import Avatar from '../components/Avatar'
import Botao from '../components/Botao'
import dados from '../data/ranking.json'
import { useApp } from '../context/AppContext'

export default function Ranking() {
  const { perfil, pontos } = useApp()
  const [aba, setAba] = useState('geral')

  // O ranking é de demonstração (jogadores fictícios). Inclui o usuário atual na posição correta.
  const lista = useMemo(() => {
    const base = dados[aba].map((j) => ({ ...j, voce: false }))
    if (perfil) base.push({ nome: perfil.nome, avatar: perfil.avatar, pontos, voce: true })
    return base.sort((a, b) => b.pontos - a.pontos)
  }, [aba, perfil, pontos])

  const podio = lista.slice(0, 3)
  const resto = lista.slice(3)

  return (
    <>
      <h1>Ranking</h1>
      <p className="subtitulo">Veja como você está em relação aos outros participantes.</p>

      <div className="abas" role="tablist" aria-label="Tipo de ranking">
        {[
          ['geral', 'Geral'],
          ['semana', 'Semana'],
        ].map(([chave, rotulo]) => (
          <button key={chave} type="button" role="tab" aria-selected={aba === chave} className={`tag ${aba === chave ? 'ativa' : ''}`} onClick={() => setAba(chave)}>
            {rotulo}
          </button>
        ))}
      </div>

      <ol className="podio">
        {podio.map((j, i) => (
          <li key={j.nome} className={`podio-item p${i + 1} ${j.voce ? 'voce' : ''}`}>
            <span className="podio-posicao">{i + 1}º</span>
            <Avatar nome={j.nome} cor={j.avatar} tamanho={52} />
            <strong>
              {j.nome}
              {j.voce && ' (você)'}
            </strong>
            <span>{j.pontos} pts</span>
          </li>
        ))}
      </ol>

      <ol className="ranking-lista card-vidro" start={4}>
        {resto.map((j, i) => (
          <li key={j.nome} className={j.voce ? 'voce' : ''}>
            <span className="rk-pos">{i + 4}º</span>
            <Avatar nome={j.nome} cor={j.avatar} tamanho={32} />
            <span className="rk-nome">
              {j.nome}
              {j.voce && ' (você)'}
            </span>
            <span className="rk-pontos">{j.pontos} pts</span>
          </li>
        ))}
      </ol>

      <p className="aviso-pequeno">{dados.aviso}</p>
      {!perfil && (
        <Botao to="/perfil/criar" variante="vivo">
          Criar perfil para entrar no ranking
        </Botao>
      )}
    </>
  )
}
