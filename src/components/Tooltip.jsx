import { useId } from 'react'

// Balão explicativo que abre no hover e no foco do teclado.
export default function Tooltip({ texto, children }) {
  const id = useId()
  return (
    <span className="tooltip" tabIndex={0} aria-describedby={id}>
      {children}
      <span role="tooltip" id={id} className="tooltip-balao">
        {texto}
      </span>
    </span>
  )
}
