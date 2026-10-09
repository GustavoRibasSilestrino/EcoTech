// Barra de progresso acessível. "valor" e "total" definem o percentual.
export default function BarraProgresso({ valor, total, rotulo }) {
  const percentual = total === 0 ? 0 : Math.min(100, Math.round((valor / total) * 100))
  return (
    <div
      className="barra"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentual}
      aria-label={rotulo}
    >
      <div className="barra-preenchida" style={{ width: `${percentual}%` }} />
    </div>
  )
}
