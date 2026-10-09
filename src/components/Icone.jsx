// Ícones de traço simples (SVG), herdam a cor do texto.
const CAMINHOS = {
  folha: 'M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19c2-4 5-7 9-9',
  escudo: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z',
  bussola: 'M12 3a9 9 0 100 18 9 9 0 000-18zm3.5 5.5l-2 5-5 2 2-5z',
  trofeu: 'M8 4h8v5a4 4 0 01-8 0zM8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3M12 13v4M8 21h8M10 17h4',
  passos: 'M6 20l3-8 3 2 3-8M4 20h16',
  cadeado: 'M7 11V8a5 5 0 0110 0v3M6 11h12v9H6z',
  coracao: 'M12 20s-8-5-8-11a4.5 4.5 0 018-2.7A4.5 4.5 0 0120 9c0 6-8 11-8 11z',
  sol: 'M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5',
  lua: 'M20 14A8 8 0 1110 4a7 7 0 0010 10z',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  x: 'M6 6l12 12M18 6L6 18',
  alerta: 'M12 4l9 16H3zM12 10v4M12 17.5v.5',
  info: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 11v6M12 7.5v.5',
  busca: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5',
  usuario: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7',
  seta: 'M5 12h14M13 6l6 6-6 6',
}

export default function Icone({ nome, tamanho = 20, preenchido = false, className = '' }) {
  return (
    <svg
      className={`icone ${className}`}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill={preenchido ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={CAMINHOS[nome]} />
    </svg>
  )
}
