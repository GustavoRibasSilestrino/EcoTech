import { useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import BarraProgresso from '../components/BarraProgresso'
import Botao from '../components/Botao'
import Icone from '../components/Icone'
import ModalFeedback from '../components/ModalFeedback'
import modulos from '../data/modulos.json'
import { useApp } from '../context/AppContext'
import { VIDAS_INICIAIS, prepararQuiz } from '../utils/gamificacao'

export default function Quiz() {
  const { id } = useParams()
  const { concluidos } = useApp()
  const modulo = modulos.find((m) => String(m.id) === id)
  if (!modulo) return <Navigate to="/trilha" replace />
  const liberado = modulo.id === 1 || concluidos[modulo.id - 1] || concluidos[modulo.id]
  if (!liberado) return <Navigate to="/trilha" replace />
  // key reinicia o estado do quiz ao trocar de módulo
  return <QuizJogo key={modulo.id} modulo={modulo} />
}

function QuizJogo({ modulo }) {
  const { concluirModulo } = useApp()
  const navegar = useNavigate()
  const [rodada, setRodada] = useState(0)
  const perguntas = useMemo(() => prepararQuiz(modulo), [modulo, rodada]) // eslint-disable-line react-hooks/exhaustive-deps
  const [indice, setIndice] = useState(0)
  const [vidas, setVidas] = useState(VIDAS_INICIAIS)
  const [acertos, setAcertos] = useState(0)
  const [escolhida, setEscolhida] = useState(null)

  const pergunta = perguntas[indice]
  const ultima = indice === perguntas.length - 1
  const fimDeJogo = vidas === 0 && escolhida === null

  function responder(opcao, i) {
    if (escolhida !== null) return
    setEscolhida(i)
    if (opcao.correta) setAcertos((a) => a + 1)
    else setVidas((v) => v - 1)
  }

  function continuar() {
    setEscolhida(null)
    if (vidas === 0) return // cai na tela de Game Over
    if (ultima) {
      concluirModulo(modulo.id, acertos, perguntas.length)
      navegar(`/resultado/${modulo.id}`)
      return
    }
    setIndice((i) => i + 1)
  }

  function recomecar() {
    setRodada((r) => r + 1)
    setIndice(0)
    setVidas(VIDAS_INICIAIS)
    setAcertos(0)
    setEscolhida(null)
  }

  if (fimDeJogo) {
    return (
      <section className="form-centro">
        <div className="card-vidro game-over">
          <h1>Fim de jogo</h1>
          <p>Suas vidas acabaram. Releia o módulo e tente novamente.</p>
          <div className="acoes centro">
            <Botao to={`/modulo/${modulo.id}`}>Reler módulo</Botao>
            <Botao variante="vivo" onClick={recomecar}>
              Recomeçar quiz
            </Botao>
          </div>
        </div>
      </section>
    )
  }

  const respondida = escolhida !== null
  const opcaoEscolhida = respondida ? pergunta.opcoes[escolhida] : null

  return (
    <section className="quiz">
      <div className="quiz-topo">
        <p className="selo-ods">
          Módulo {modulo.id} · Pergunta {indice + 1} de {perguntas.length}
        </p>
        <p className="vidas" role="img" aria-label={`${vidas} vidas restantes`}>
          {Array.from({ length: VIDAS_INICIAIS }, (_, i) => (
            <span key={i} className={i < vidas ? 'vida' : 'vida perdida'}>
              <Icone nome="coracao" preenchido={i < vidas} tamanho={22} />
            </span>
          ))}
        </p>
      </div>
      <BarraProgresso valor={indice + (respondida ? 1 : 0)} total={perguntas.length} rotulo="Progresso do quiz" />

      <div className="card-vidro quiz-card">
        <h1 className="quiz-pergunta">{pergunta.pergunta}</h1>
        <div className="opcoes" role="group" aria-label="Alternativas">
          {pergunta.opcoes.map((op, i) => {
            let classe = 'opcao'
            if (respondida) {
              if (op.correta) classe += ' certa'
              else if (i === escolhida) classe += ' errada'
            }
            return (
              <button key={op.texto} type="button" className={classe} disabled={respondida} onClick={() => responder(op, i)}>
                <span className="opcao-letra" aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </span>
                {op.texto}
              </button>
            )
          })}
        </div>
      </div>

      {respondida && (
        <ModalFeedback
          acertou={opcaoEscolhida.correta}
          respostaCorreta={pergunta.textoCorreto}
          explicacao={pergunta.explicacao}
          textoBotao={vidas === 0 ? 'Continuar' : ultima ? 'Ver resultado' : 'Próxima pergunta'}
          onContinuar={continuar}
        />
      )}
    </section>
  )
}
