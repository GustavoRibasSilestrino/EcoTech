import { useNavigate } from 'react-router-dom'
import Avatar from '../components/Avatar'
import BarraProgresso from '../components/BarraProgresso'
import Icone from '../components/Icone'
import modulos from '../data/modulos.json'
import { useApp } from '../context/AppContext'

export default function Trilha() {
  const { perfil, pontos, nivel, concluidos, notificar } = useApp()
  const navegar = useNavigate()
  const totalConcluidos = modulos.filter((m) => concluidos[m.id]).length

  // O módulo atual é o primeiro ainda não concluído.
  const atual = modulos.find((m) => !concluidos[m.id])?.id ?? null

  function estadoDo(m) {
    if (concluidos[m.id]) return 'concluido'
    if (m.id === atual) return 'atual'
    return 'bloqueado'
  }

  function abrir(m, estado) {
    if (estado === 'bloqueado') {
      notificar('Conclua o módulo anterior para liberar este.', 'aviso')
      return
    }
    navegar(`/modulo/${m.id}`)
  }

  return (
    <>
      <section className="card-vidro painel-topo">
        <Avatar nome={perfil.nome} cor={perfil.avatar} tamanho={56} />
        <div className="painel-dados">
          <h1>Olá, {perfil.nome}</h1>
          <p>
            Nível {nivel.nivel} · {nivel.nome} · {pontos} pontos
          </p>
          <BarraProgresso valor={nivel.noNivel} total={50} rotulo="Progresso até o próximo nível" />
          <p className="aviso-pequeno">Faltam {nivel.falta} pontos para o próximo nível.</p>
        </div>
        <div className="painel-resumo">
          <strong>
            {totalConcluidos}/{modulos.length}
          </strong>
          <span>módulos concluídos</span>
        </div>
      </section>

      <h2 className="titulo-secao">Trilha</h2>

      <ol className="trilha">
        {modulos.map((m, i) => {
          const estado = estadoDo(m)
          const resultado = concluidos[m.id]
          return (
            <li key={m.id} className={`trilha-no ${i % 2 === 0 ? 'esq' : 'dir'} ${estado}`}>
              <button
                type="button"
                className="trilha-botao"
                aria-disabled={estado === 'bloqueado'}
                onClick={() => abrir(m, estado)}
              >
                <span className="trilha-bola" aria-hidden="true">
                  {estado === 'bloqueado' ? (
                    <Icone nome="cadeado" />
                  ) : estado === 'concluido' ? (
                    <Icone nome="check" />
                  ) : (
                    m.id
                  )}
                </span>
                <span className="trilha-info">
                  <span className="trilha-numero">Módulo {m.id}</span>
                  <strong>{m.titulo}</strong>
                  <small>
                    {estado === 'concluido' && `${resultado.acertos}/${resultado.total} acertos`}
                    {estado === 'atual' && 'Em andamento'}
                    {estado === 'bloqueado' && 'Bloqueado'}
                  </small>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </>
  )
}
