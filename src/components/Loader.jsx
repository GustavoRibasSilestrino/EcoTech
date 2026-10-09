// Indicador de carregamento discreto.
export default function Loader({ texto = 'Carregando...' }) {
  return (
    <div className="loader" role="status">
      <span className="loader-anel" aria-hidden="true" />
      <p>{texto}</p>
    </div>
  )
}
