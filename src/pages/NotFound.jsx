import Botao from '../components/Botao'

export default function NotFound() {
  return (
    <section className="form-centro">
      <div className="card-vidro game-over">
        <p className="selo-ods">Erro 404</p>
        <h1>Página não encontrada</h1>
        <p>O endereço que você acessou não existe ou foi movido.</p>
        <Botao to="/" variante="vivo" tamanho="lg">
          Voltar para o início
        </Botao>
      </div>
    </section>
  )
}
