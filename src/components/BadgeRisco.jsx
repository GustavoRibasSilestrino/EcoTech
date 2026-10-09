import { RISCOS } from '../utils/gamificacao'

// Etiqueta colorida do risco de extinção (verde: estável, amarelo: vulnerável, vermelho: crítico).
export default function BadgeRisco({ risco, status }) {
  const info = RISCOS[risco] ?? RISCOS.estavel
  return (
    <span className={`badge-risco ${info.classe}`} title={`Situação: ${status}`}>
      {status ?? info.rotulo}
    </span>
  )
}
