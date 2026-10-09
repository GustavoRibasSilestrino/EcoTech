import { Navigate, useParams } from 'react-router-dom'
import Botao from '../components/Botao'
import modulos from '../data/modulos.json'
import { useApp } from '../context/AppContext'

export default function Resultado() {
  const { id } = useParams()
  const { ultimoResultado, nivel } = useApp()
  const modulo = modulos.find((m) => String(m.id) === id)

  if (!modulo || !ultimoResultado || ultimoResultado.idModulo !== modulo.id) {
    return <Navigate to="/trilha" replace />
  }

  const { acertos, total, ganho } = ultimoResultado
  const perfeito = acertos === total
  const proximo = modulos.find((m) => m.id === modulo.id + 1)

  return (
    <section className="form-centro">
      <div className="card-vidro resultado">
        <p className="selo-ods">Módulo {modulo.id} concluído</p>
        <h1>Resultado</h1>
        <p className="placar">
          {acertos} de {total} respostas corretas
        </p>
        <p className="pontos-ganhos">+{ganho} pontos</p>
        <p>
          Nível {nivel.nivel} · {nivel.nome}
        </p>
        {perfeito && <p className="selo-novo">Desempenho perfeito neste módulo.</p>}
        <div className="acoes centro">
          {proximo ? (
            <Botao to={`/modulo/${proximo.id}`} variante="vivo">
              Próximo módulo
            </Botao>
          ) : (
            <Botao to="/perfil" variante="vivo">
              Ver conquistas
            </Botao>
          )}
          <Botao to={`/quiz/${modulo.id}`}>Refazer quiz</Botao>
          <Botao to="/ranking">Ver ranking</Botao>
        </div>
      </div>
    </section>
  )
}
