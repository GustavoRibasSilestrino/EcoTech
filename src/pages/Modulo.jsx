import { Navigate, useParams } from 'react-router-dom'
import Botao from '../components/Botao'
import TextoComGlossario from '../components/TextoComGlossario'
import modulos from '../data/modulos.json'
import { useApp } from '../context/AppContext'

export default function Modulo() {
  const { id } = useParams()
  const { concluidos } = useApp()
  const modulo = modulos.find((m) => String(m.id) === id)

  if (!modulo) return <Navigate to="/trilha" replace />

  // só abre se for o primeiro ou se o anterior estiver concluído
  const liberado = modulo.id === 1 || concluidos[modulo.id - 1] || concluidos[modulo.id]
  if (!liberado) return <Navigate to="/trilha" replace />

  return (
    <article className="modulo">
      <p className="selo-ods">
        Módulo {modulo.id} de {modulos.length}
      </p>
      <h1>{modulo.titulo}</h1>

      <div className="card-vidro texto-leitura">
        {modulo.conteudo.map((p, i) => (
          <TextoComGlossario key={i} texto={p} />
        ))}
        <p className="aviso-pequeno">Passe o mouse (ou use Tab) sobre os termos destacados para ver o significado.</p>
      </div>

      <aside className="curiosidade">
        <strong>Você sabia?</strong>
        <p>{modulo.curiosidade}</p>
      </aside>

      <div className="acoes">
        <Botao to="/trilha">Voltar à trilha</Botao>
        <Botao to={`/quiz/${modulo.id}`} variante="vivo" tamanho="lg">
          Fazer o quiz
        </Botao>
      </div>
    </article>
  )
}
