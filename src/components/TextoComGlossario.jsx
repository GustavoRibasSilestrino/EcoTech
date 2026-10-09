import { GLOSSARIO } from '../utils/gamificacao'
import Tooltip from './Tooltip'

const REGEX = new RegExp(`(${GLOSSARIO.map((g) => g.termo).join('|')})`, 'gi')

// Destaca termos científicos do glossário com um Tooltip explicativo.
export default function TextoComGlossario({ texto }) {
  const partes = texto.split(REGEX)
  return (
    <p>
      {partes.map((parte, i) => {
        const item = GLOSSARIO.find((g) => g.termo.toLowerCase() === parte.toLowerCase())
        return item ? (
          <Tooltip key={i} texto={item.definicao}>
            {parte}
          </Tooltip>
        ) : (
          parte
        )
      })}
    </p>
  )
}
