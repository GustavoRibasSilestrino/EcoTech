import { Link } from 'react-router-dom'

// Botão reutilizável com efeito de vidro. Vira <Link> quando recebe "to".
export default function Botao({ to, variante = 'vidro', tamanho = 'md', children, className = '', ...resto }) {
  const classes = `btn btn-${variante} btn-${tamanho} ${className}`.trim()
  if (to) {
    return (
      <Link to={to} className={classes} {...resto}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...resto}>
      {children}
    </button>
  )
}
