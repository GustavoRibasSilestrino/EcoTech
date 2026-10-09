// Fundo fixo com a foto da floresta e uma camada escura para garantir a leitura do texto.
export default function Fundo() {
  return (
    <div className="fundo" aria-hidden="true">
      <div className="fundo-foto" />
      <div className="fundo-veu" />
    </div>
  )
}
