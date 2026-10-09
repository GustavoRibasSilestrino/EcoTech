import Botao from '../components/Botao'

export default function Sobre() {
  return (
    <>
      <h1>Sobre o EcoTech</h1>

      <section className="card-vidro texto-leitura">
        <h2>O projeto</h2>
        <p>
          O EcoTech é uma aplicação web desenvolvida para o Hackathon de Front-end Frameworks. Ele ensina, de forma
          interativa, o que é o desmatamento, quais são suas causas e como ele afeta a fauna, a flora, o solo, a água e o
          clima.
        </p>
        <p>
          Tudo funciona direto no navegador: não há servidor nem banco de dados. Perfil, progresso e favoritos ficam
          salvos no <code>localStorage</code> do seu dispositivo, e o ranking usa participantes de demonstração.
        </p>
      </section>

      <div className="grade dois">
        <section className="card-vidro">
          <h2>ODS 15 · Vida Terrestre</h2>
          <p>
            Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, combater o desmatamento e deter
            a perda de biodiversidade.
          </p>
        </section>
        <section className="card-vidro">
          <h2>ODS 4 · Educação de Qualidade</h2>
          <p>Garantir educação inclusiva e de qualidade. O EcoTech usa quizzes e conteúdo curto para facilitar o aprendizado.</p>
        </section>
      </div>

      <section className="card-vidro texto-leitura">
        <h2>Fontes e referências</h2>
        <ul>
          <li>MapBiomas · mapbiomas.org</li>
          <li>Global Forest Watch · globalforestwatch.org</li>
          <li>WWF Brasil · wwf.org.br</li>
          <li>ICMBio · lista oficial de espécies ameaçadas</li>
          <li>Ministério do Meio Ambiente · educação ambiental</li>
        </ul>
        <p className="aviso-pequeno">
          As fotos da página inicial e do fundo foram fornecidas pela equipe. Registre autor e fonte de cada imagem nos
          créditos do README.
        </p>
      </section>

      <div className="acoes">
        <Botao to="/trilha" variante="vivo">
          Ir para a trilha
        </Botao>
      </div>
    </>
  )
}
