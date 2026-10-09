// Nuvens decorativas (geradas por nós) que passam devagar POR CIMA dos textos, a partir da segunda tela.
// Ficam menores e junto aos cantos da tela (esquerda e direita), para dar profundidade sem cobrir o miolo do texto.
const NUVENS = [
  { topo: '2%', esq: '-5%', larg: '26vw', opac: 0.6, dur: '110s', atraso: '-20s', blur: '1px' },
  { topo: '10%', esq: '80%', larg: '22vw', opac: 0.55, dur: '130s', atraso: '-60s', blur: '1px' },
  { topo: '20%', esq: '-4%', larg: '24vw', opac: 0.55, dur: '100s', atraso: '-35s', blur: '1px' },
  { topo: '30%', esq: '82%', larg: '25vw', opac: 0.58, dur: '120s', atraso: '-80s', blur: '1px' },
  { topo: '41%', esq: '-5%', larg: '22vw', opac: 0.5, dur: '115s', atraso: '-10s', blur: '2px' },
  { topo: '51%', esq: '80%', larg: '27vw', opac: 0.58, dur: '105s', atraso: '-50s', blur: '1px' },
  { topo: '62%', esq: '-4%', larg: '25vw', opac: 0.55, dur: '125s', atraso: '-70s', blur: '1px' },
  { topo: '72%', esq: '82%', larg: '22vw', opac: 0.52, dur: '135s', atraso: '-25s', blur: '2px' },
  { topo: '82%', esq: '-5%', larg: '26vw', opac: 0.58, dur: '110s', atraso: '-45s', blur: '1px' },
  { topo: '92%', esq: '80%', larg: '24vw', opac: 0.5, dur: '120s', atraso: '-15s', blur: '1px' },
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
