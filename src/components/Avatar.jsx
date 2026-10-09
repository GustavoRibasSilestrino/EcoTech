// Avatar com a inicial do nome sobre uma cor. Aceita cor (#hex) ou, se faltar, deriva do nome.
const CORES = ['#e0a526', '#3fae6a', '#3b82c4', '#d5545a', '#8b7bd8', '#1ea99a', '#d46a9a', '#7c8a9a']

function corDoNome(nome) {
  let h = 0
  for (const c of nome) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return CORES[h % CORES.length]
}

export default function Avatar({ nome, cor, tamanho = 40 }) {
  const fundo = typeof cor === 'string' && cor.startsWith('#') ? cor : corDoNome(nome)
  return (
    <span
      className="avatar"
      style={{ width: tamanho, height: tamanho, background: fundo, fontSize: tamanho * 0.45 }}
      aria-hidden="true"
    >
      {nome.trim().charAt(0).toUpperCase()}
    </span>
  )
}

export { CORES as CORES_AVATAR }
