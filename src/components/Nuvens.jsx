// Nuvens decorativas (geradas por nós) que passam devagar sobre o conteúdo, a partir da segunda tela,
// para dar profundidade. Ficam por cima do texto, mas bem transparentes e sem bloquear cliques.
const NUVENS = [
  { topo: '3%', esq: '-6%', larg: '46vw', opac: 0.2, dur: '110s', atraso: '-20s', blur: '2px' },
  { topo: '12%', esq: '58%', larg: '40vw', opac: 0.16, dur: '130s', atraso: '-60s', blur: '3px' },
  { topo: '23%', esq: '12%', larg: '50vw', opac: 0.18, dur: '100s', atraso: '-35s', blur: '2px' },
  { topo: '34%', esq: '64%', larg: '44vw', opac: 0.2, dur: '120s', atraso: '-80s', blur: '2px' },
  { topo: '46%', esq: '-4%', larg: '42vw', opac: 0.16, dur: '115s', atraso: '-10s', blur: '3px' },
  { topo: '57%', esq: '40%', larg: '52vw', opac: 0.18, dur: '105s', atraso: '-50s', blur: '2px' },
  { topo: '69%', esq: '66%', larg: '38vw', opac: 0.2, dur: '125s', atraso: '-70s', blur: '2px' },
  { topo: '80%', esq: '8%', larg: '48vw', opac: 0.17, dur: '135s', atraso: '-25s', blur: '3px' },
  { topo: '91%', esq: '52%', larg: '44vw', opac: 0.2, dur: '110s', atraso: '-45s', blur: '2px' },
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
