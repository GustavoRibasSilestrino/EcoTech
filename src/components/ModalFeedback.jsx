import { useEffect, useRef } from 'react'
import Botao from './Botao'
import Icone from './Icone'

// Modal que informa acerto (verde) ou erro (vermelho, mostrando a resposta certa).
export default function ModalFeedback({ acertou, respostaCorreta, explicacao, textoBotao, onContinuar }) {
  const botao = useRef(null)

  useEffect(() => {
    botao.current?.focus()
  }, [])

  return (
    <div className="modal-fundo">
      <div
        className={`modal ${acertou ? 'modal-certo' : 'modal-errado'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >
        <span className="modal-icone">
          <Icone nome={acertou ? 'check' : 'x'} tamanho={26} />
        </span>
        <h2 id="modal-titulo">{acertou ? 'Resposta correta' : 'Resposta incorreta'}</h2>
        {!acertou && (
          <p>
            A alternativa correta era: <strong>{respostaCorreta}</strong>
          </p>
        )}
        <p className="modal-explicacao">{explicacao}</p>
        <Botao ref={botao} variante="vivo" onClick={onContinuar}>
          {textoBotao}
        </Botao>
      </div>
    </div>
  )
}
