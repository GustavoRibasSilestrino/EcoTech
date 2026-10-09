import Botao from '../components/Botao'
import Icone from '../components/Icone'
import Nuvens from '../components/Nuvens'
import modulos from '../data/modulos.json'
import { useApp } from '../context/AppContext'

const PASSOS = [
  { n: '01', titulo: 'Aprenda', texto: 'Módulos curtos sobre as causas e os impactos do desmatamento.' },
  { n: '02', titulo: 'Pratique', texto: 'Quizzes com vidas, feedback imediato e perguntas embaralhadas.' },
  { n: '03', titulo: 'Evolua', texto: 'Ganhe pontos, suba de nível, conquiste selos e acompanhe o ranking.' },
]

const CONSEQUENCIAS = [
  {
    titulo: 'Perda de biodiversidade',
    texto:
      'Sem abrigo e alimento, animais e plantas desaparecem. Muitas espécies só existem em um bioma específico e não têm para onde ir quando ele é destruído.',
  },
  {
    titulo: 'Mudança do clima',
    texto:
      'As árvores armazenam carbono. Ao serem queimadas ou derrubadas, parte dele volta à atmosfera e intensifica o aquecimento global.',
  },
  {
    titulo: 'Solo e água',
    texto:
      'Sem a cobertura vegetal, a chuva arrasta o solo para os rios. O resultado é erosão, assoreamento, água mais suja e nascentes enfraquecidas.',
  },
  {
    titulo: 'Pessoas e comunidades',
    texto:
      'Povos indígenas, ribeirinhos e agricultores dependem da floresta para moradia, alimento e renda. A perda da mata também afeta a saúde e a economia.',
  },
]

const ETAPAS = [
  { n: '1', titulo: 'Abertura de acesso', texto: 'Estradas e ramais chegam a áreas isoladas e facilitam a exploração.' },
  { n: '2', titulo: 'Retirada da madeira', texto: 'As árvores de maior valor são cortadas, muitas vezes de forma ilegal.' },
  { n: '3', titulo: 'Queima da vegetação', texto: 'O que sobra é queimado para limpar o terreno, liberando carbono e fumaça.' },
  { n: '4', titulo: 'Novo uso da terra', texto: 'A área vira pasto, lavoura ou garimpo, e a floresta não volta sozinha.' },
]

const BIOMAS = [
  { nome: 'Amazônia', texto: 'A maior floresta tropical do mundo. Abriga enorme biodiversidade e ajuda a regular as chuvas.' },
  { nome: 'Cerrado', texto: 'Considerada a savana mais biodiversa do planeta. Guarda nascentes de grandes bacias hidrográficas.' },
  { nome: 'Mata Atlântica', texto: 'Restou apenas uma fração da cobertura original, e é nela que vive grande parte da população brasileira.' },
  { nome: 'Caatinga', texto: 'Único bioma exclusivamente brasileiro, adaptado ao clima semiárido e rico em espécies endêmicas.' },
  { nome: 'Pampa', texto: 'Campos do Sul do país, com vegetação campestre e fauna própria, pressionados pela conversão para lavouras.' },
  { nome: 'Pantanal', texto: 'A maior planície alagável do mundo, que depende do ciclo de cheias e de rios saudáveis.' },
]

const MITOS = [
  {
    pergunta: 'Plantar árvores resolve o problema do desmatamento?',
    resposta:
      'Ajuda, mas não substitui a proteção da floresta que já existe. Uma floresta nativa madura abriga muito mais biodiversidade e armazena mais carbono do que uma área recém-plantada. O ideal é evitar o desmatamento e, além disso, recuperar áreas degradadas com espécies nativas.',
  },
  {
    pergunta: 'Todo desmatamento é ilegal?',
    resposta:
      'Não. A lei permite a supressão de vegetação em certos casos, com autorização e dentro de limites. O problema é a parte feita sem licença, em áreas protegidas ou acima do permitido, que é considerada crime ambiental.',
  },
  {
    pergunta: 'O desmatamento só afeta quem mora perto da floresta?',
    resposta:
      'Não. A floresta influencia o regime de chuvas, o clima e a qualidade da água em regiões distantes. Os efeitos chegam também às cidades e à produção de alimentos.',
  },
  {
    pergunta: 'Eu não moro perto de uma floresta. Posso fazer alguma coisa?',
    resposta:
      'Pode. Consumir com consciência, evitar desperdício de papel e madeira, conferir a origem dos produtos, informar-se e conversar sobre o tema são atitudes que contribuem, além de apoiar projetos de conservação e denunciar crimes ambientais.',
  },
]

const ACOES = [
  { titulo: 'Consuma com consciência', texto: 'Prefira produtos com origem conhecida e selos de certificação florestal, como o FSC.' },
  { titulo: 'Reduza o desperdício', texto: 'Use menos papel, reaproveite materiais e separe o lixo para reciclagem.' },
  { titulo: 'Informe-se e informe', texto: 'Compartilhe dados confiáveis e converse sobre o tema com família, amigos e na escola.' },
  { titulo: 'Apoie a conservação', texto: 'Contribua com projetos de reflorestamento com espécies nativas e organizações sérias.' },
  { titulo: 'Denuncie crimes ambientais', texto: 'Queimadas e desmatamento ilegal podem ser comunicados aos órgãos de fiscalização, como o Ibama.' },
  { titulo: 'Cobre soluções', texto: 'Acompanhe políticas ambientais e valorize quem protege as florestas.' },
]

export default function Home() {
  const { perfil } = useApp()

  return (
    <>
      <section className="hero-foto">
        <div className="hero-conteudo">
          <h1>Educação ambiental para proteger as florestas</h1>
          <p className="hero-sub">
            Entenda o que é o desmatamento, como ele afeta a fauna, a flora, o clima e a água, e o que você pode fazer a
            respeito.
          </p>
          <div className="hero-botoes">
            <Botao to={perfil ? '/trilha' : '/perfil/criar'} variante="vivo" tamanho="md">
              Começar trilha <Icone nome="seta" tamanho={18} />
            </Botao>
            <Botao to="/especies" tamanho="md">
              Ver espécies
            </Botao>
          </div>
        </div>
      </section>

      <div className="conteudo-home">
        <Nuvens />
        <section className="secao">
          <h2 className="titulo-secao">O que é o desmatamento</h2>
          <div className="card-vidro texto-leitura">
            <p>
              Desmatamento é a remoção da vegetação nativa de uma área para dar lugar a pastos, plantações, minas, cidades
              ou estradas. Uma parte pode ocorrer de forma autorizada por lei, mas grande parte acontece sem licença e sem
              controle, o que configura crime ambiental.
            </p>
            <p>
              As florestas abrigam uma imensa variedade de vidas, regulam o clima, protegem o solo e mantêm os rios
              abastecidos. Quando elas desaparecem, todas essas funções são comprometidas ao mesmo tempo.
            </p>
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Principais consequências</h2>
          <div className="grade quatro">
            {CONSEQUENCIAS.map((c) => (
              <article key={c.titulo} className="card-vidro">
                <h3>{c.titulo}</h3>
                <p className="texto-suave">{c.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Como o desmatamento acontece</h2>
          <ol className="linha-etapas">
            {ETAPAS.map((e) => (
              <li key={e.n} className="card-vidro">
                <span className="etapa-numero">{e.n}</span>
                <h3>{e.titulo}</h3>
                <p className="texto-suave">{e.texto}</p>
              </li>
            ))}
          </ol>
          <p className="aviso-pequeno">
            As causas mais comuns são a expansão da agropecuária, as queimadas, a extração ilegal de madeira, a mineração
            e o garimpo ilegal, e a abertura de estradas e áreas urbanas.
          </p>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Os biomas brasileiros</h2>
          <div className="grade tres">
            {BIOMAS.map((b) => (
              <article key={b.nome} className="card-vidro bioma-info">
                <h3>{b.nome}</h3>
                <p className="texto-suave">{b.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Mitos e verdades</h2>
          <div className="mitos">
            {MITOS.map((m) => (
              <details key={m.pergunta} className="mito card-vidro">
                <summary>{m.pergunta}</summary>
                <p>{m.resposta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">O que você pode fazer</h2>
          <div className="grade tres">
            {ACOES.map((a) => (
              <article key={a.titulo} className="card-vidro">
                <h3>{a.titulo}</h3>
                <p className="texto-suave">{a.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Como funciona o EcoTech</h2>
          <div className="grade tres">
            {PASSOS.map((p) => (
              <article key={p.n} className="card-vidro passo">
                <span className="passo-numero">{p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="titulo-secao">Trilha de aprendizado</h2>
          <ol className="lista-modulos">
            {modulos.map((m) => (
              <li key={m.id} className="card-vidro">
                <span className="modulo-numero">{String(m.id).padStart(2, '0')}</span>
                <div>
                  <h3>{m.titulo}</h3>
                  <p>{m.resumo}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="secao">
          <div className="card-vidro destaque">
            <h2>Comece agora</h2>
            <p>
              Cada módulo leva poucos minutos. Complete a trilha, teste o que aprendeu e conheça as espécies que dependem
              das nossas florestas.
            </p>
            <Botao to={perfil ? '/trilha' : '/perfil/criar'} variante="vivo" tamanho="lg">
              Começar trilha
            </Botao>
          </div>
        </section>
      </div>
    </>
  )
}
