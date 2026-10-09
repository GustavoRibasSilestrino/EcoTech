// Nuvens decorativas (geradas por nós) que passam devagar POR CIMA dos textos, a partir da segunda tela,
// cobrindo parte das letras para dar profundidade. Não bloqueiam cliques.
const NUVENS = [
  { topo: '1%', esq: '-8%', larg: '56vw', opac: 0.62, dur: '110s', atraso: '-20s', blur: '1px' },
  { topo: '9%', esq: '56%', larg: '48vw', opac: 0.5, dur: '130s', atraso: '-60s', blur: '2px' },
  { topo: '19%', esq: '8%', larg: '58vw', opac: 0.58, dur: '100s', atraso: '-35s', blur: '1px' },
  { topo: '29%', esq: '62%', larg: '52vw', opac: 0.55, dur: '120s', atraso: '-80s', blur: '1px' },
  { topo: '40%', esq: '-6%', larg: '50vw', opac: 0.5, dur: '115s', atraso: '-10s', blur: '2px' },
  { topo: '50%', esq: '38%', larg: '60vw', opac: 0.6, dur: '105s', atraso: '-50s', blur: '1px' },
  { topo: '61%', esq: '64%', larg: '46vw', opac: 0.52, dur: '125s', atraso: '-70s', blur: '2px' },
  { topo: '72%', esq: '4%', larg: '56vw', opac: 0.58, dur: '135s', atraso: '-25s', blur: '1px' },
  { topo: '82%', esq: '50%', larg: '52vw', opac: 0.55, dur: '110s', atraso: '-45s', blur: '1px' },
  { topo: '92%', esq: '-4%', larg: '48vw', opac: 0.5, dur: '120s', atraso: '-15s', blur: '2px' },
]

export default function Nuvens() {
  return (
    <div className="nuvens" aria-hidden="true">
      {NUVENS.map((n, i) => (
        <img
          key={i}
          src="/img/nuvem.png"
          alt=""
          className="nuvem"
          style={{
            top: n.topo,
            left: n.esq,
            width: n.larg,
            opacity: n.opac,
            filter: `blur(${n.blur})`,
            animationDuration: n.dur,
            animationDelay: n.atraso,
            animationDirection: i % 2 ? 'alternate-reverse' : 'alternate',
          }}
        />
      ))}
    </div>
  )
}
