import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Botao from '../components/Botao'
import { useApp } from '../context/AppContext'
import { AVATARES } from '../utils/gamificacao'

export default function CriarPerfil() {
  const { perfil, salvarPerfil } = useApp()
  const navegar = useNavigate()
  const [nome, setNome] = useState(perfil?.nome ?? '')
  const [avatar, setAvatar] = useState(AVATARES.includes(perfil?.avatar) ? perfil.avatar : AVATARES[0])
  const [erro, setErro] = useState('')

  const editando = Boolean(perfil)

  function enviar(e) {
    e.preventDefault()
    const limpo = nome.trim()
    if (limpo.length < 2) {
      setErro('Digite um nome ou apelido com pelo menos 2 letras.')
      return
    }
    salvarPerfil({ nome: limpo, avatar })
    navegar(editando ? '/perfil' : '/trilha')
  }

  return (
    <section className="form-centro">
      <form className="card-vidro form" onSubmit={enviar} noValidate>
        <h1>{editando ? 'Editar perfil' : 'Criar perfil'}</h1>
        <p className="subtitulo">Escolha um nome e uma cor para começar a trilha.</p>

        <label htmlFor="nome">Nome ou apelido</label>
        <input
          id="nome"
          type="text"
          value={nome}
          maxLength={20}
          autoComplete="nickname"
          aria-invalid={Boolean(erro)}
          aria-describedby={erro ? 'erro-nome' : undefined}
          onChange={(e) => {
            setNome(e.target.value)
            setErro('')
          }}
        />
        {erro && (
          <p id="erro-nome" className="erro" role="alert">
            {erro}
          </p>
        )}

        <fieldset>
          <legend>Cor do avatar</legend>
          <div className="avatares">
            {AVATARES.map((cor, i) => (
              <label key={cor} className={`avatar-opcao ${avatar === cor ? 'ativo' : ''}`} style={{ '--cor': cor }}>
                <input type="radio" name="avatar" value={cor} checked={avatar === cor} onChange={() => setAvatar(cor)} />
                <span className="amostra" aria-hidden="true">
                  {nome.trim().charAt(0).toUpperCase() || '·'}
                </span>
                <span className="sr-only">Cor {i + 1}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <p className="aviso-pequeno">Seus dados ficam salvos apenas neste dispositivo, no navegador. Não há senha.</p>

        <Botao type="submit" variante="vivo" tamanho="lg">
          {editando ? 'Salvar alterações' : 'Começar'}
        </Botao>
      </form>
    </section>
  )
}
