import Botao from '../components/Botao'
import CardEspecie from '../components/CardEspecie'
import especies from '../data/especies.json'
import { useApp } from '../context/AppContext'

export default function Favoritos() {
  const { favoritos } = useApp()
  const lista = especies.filter((e) => favoritos.includes(e.id))

  return (
    <>
      <h1>Espécies favoritas</h1>

      {lista.length === 0 ? (
        <div className="card-vidro vazio">
          <p>Você ainda não favoritou nenhuma espécie. Explore o catálogo e use o ícone de coração.</p>
          <Botao to="/especies" variante="vivo">
            Explorar espécies
          </Botao>
        </div>
      ) : (
        <div className="grade cards">
          {lista.map((e) => (
            <CardEspecie key={e.id} especie={e} />
          ))}
        </div>
      )}
    </>
  )
}
