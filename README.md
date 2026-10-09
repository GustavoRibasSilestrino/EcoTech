# EcoTech

> Trilha gamificada de educação ambiental sobre o desmatamento e seus impactos na natureza.

![ODS 15](https://img.shields.io/badge/ODS-15%20Vida%20Terrestre-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## 🔗 Links do projeto

| Item | Link |
|---|---|
| Site publicado (deploy) | https://ecotech-ten-puce.vercel.app |
| Repositório | https://github.com/GustavoRibasSilestrino/EcoTech |
| Protótipo no Figma | https://www.figma.com/design/vMPOd9CJlCuDQVdjv6F5M4/Sem-t%25C3%25ADtulo?node-id=0-1&p=f&t=2qoYHRzeBDhQPxiA-0 |
| Gestão do projeto (GitHub Projects) | https://github.com/users/GustavoRibasSilestrino/projects/2 |

---

## Sumário

1. [Sobre o projeto](#-sobre-o-projeto)
2. [ODS escolhido](#-ods-escolhido)
3. [Problema](#-problema)
4. [Benchmarking](#-benchmarking)
5. [Proposta de valor](#-proposta-de-valor)
6. [Requisitos](#-requisitos)
7. [Histórias de usuário](#-histórias-de-usuário)
8. [Protótipo](#-protótipo)
9. [Funcionalidades](#-funcionalidades)
10. [Tecnologias](#️-tecnologias)
11. [Como executar](#️-como-executar)
12. [Estrutura de pastas](#-estrutura-de-pastas)
13. [Gestão do projeto](#-gestão-do-projeto)
14. [Equipe](#-equipe)
15. [Uso de Inteligência Artificial](#-uso-de-inteligência-artificial)
16. [Créditos e fontes](#-créditos-e-fontes)
17. [Público-alvo](#público-alvo)
18. [Framework Utilizado](#framework-utilizado)
19. [Aplicação](#aplicação)
20. [Processo de Desenvolvimento](#processo-de-desenvolvimento)

---

## Sobre o projeto

O **EcoTech** é uma aplicação web (apenas front-end) desenvolvida no Hackathon de Front-end Frameworks. Ela ensina, de forma interativa, o que é o desmatamento, quais são suas causas e como ele afeta a fauna, a flora, o clima e a água. O usuário percorre uma **trilha de módulos**, responde **quizzes**, ganha **pontos e selos** e conhece **espécies ameaçadas**.

## ODS escolhido

**ODS 15 – Vida Terrestre:** proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, combatendo o desmatamento e detendo a perda de biodiversidade.

O projeto também se conecta ao **ODS 4 – Educação de Qualidade**.

## Problema

O desmatamento destrói florestas, reduz a biodiversidade, degrada o solo, altera o clima e ameaça comunidades inteiras. Mesmo assim, muitos jovens não conhecem suas causas nem como ele afeta a natureza e o dia a dia deles. O conteúdo disponível costuma ser técnico, extenso e pouco interativo, o que dificulta o interesse e o aprendizado.

**Público afetado**
- Estudantes de 12 a 17 anos (ensino fundamental II e médio)
- Professores que buscam recursos interativos para ensinar educação ambiental

**Necessidade identificada**

Um recurso educativo que explique, de forma simples e visual:
- o que é desmatamento e quais são suas causas (agropecuária, queimadas, mineração, extração ilegal de madeira);
- como ele afeta a fauna, a flora, o solo, a água e o clima;
- o que cada pessoa pode fazer para ajudar.

O recurso precisa ser atrativo e interativo, em português, gratuito e acessível pelo celular.

**Objetivo da solução**

Desenvolver uma aplicação web com uma **trilha gamificada** que ensina sobre o desmatamento e seus impactos na natureza, contendo módulos de conteúdo, quizzes, pontos, níveis, selos de conquista e ranking.

---

## Público-alvo

- Estudantes de 12 a 17 anos (ensino fundamental II e médio).
- Professores que buscam recursos interativos para ensinar educação ambiental.

---

## Benchmarking

Análise de 5 soluções existentes relacionadas ao tema (desmatamento, educação ambiental e gamificação).

| Solução | Funcionalidades | Público-alvo | Pontos fortes | Pontos fracos | O que podemos reaproveitar |
|---|---|---|---|---|---|
| [MapBiomas](https://mapbiomas.org) | Mapas e dados anuais de cobertura e uso da terra, alertas de desmatamento, séries históricas | Pesquisadores, jornalistas, gestores públicos | Dados confiáveis, abrangentes e atualizados | Linguagem técnica, pouco didático e sem interatividade educativa | Dados e gráficos reais sobre desmatamento por bioma |
| [Global Forest Watch](https://www.globalforestwatch.org) | Mapa interativo de perda florestal, alertas, painéis de dados | Pesquisadores, ONGs, governos | Visualização em mapa, dados globais | Complexo para estudantes, interface densa | Ideia de mapa visual e comparação ao longo do tempo |
| [WWF Brasil](https://www.wwf.org.br) | Artigos, campanhas e conteúdo sobre conservação e biomas | Público geral | Conteúdo confiável, tema bem abordado | Conteúdo mais textual, sem gamificação | Textos de apoio e linguagem de conscientização |
| [Duolingo](https://www.duolingo.com) | Lições curtas, pontos de experiência, sequência diária, níveis, ranking | Aprendizes de idiomas | Alto engajamento, gamificação consolidada | Não trata de meio ambiente | Pontos, níveis, sequência diária e ranking |
| [Kahoot](https://kahoot.com) | Quizzes interativos, ranking em tempo real, uso em sala de aula | Escolas e professores | Simples, competitivo, familiar para estudantes | Não tem conteúdo próprio e depende do professor | Formato de quiz com feedback imediato e ranking |

**Conclusão:** as soluções sobre desmatamento (MapBiomas, Global Forest Watch e WWF Brasil) têm conteúdo confiável, mas são técnicas ou textuais e pouco voltadas a estudantes. As soluções de gamificação (Duolingo e Kahoot) engajam bem, mas não abordam o tema ambiental. O **EcoTech** une as duas lacunas: conteúdo confiável sobre desmatamento, em português e em linguagem simples, apresentado em uma trilha gamificada.

---

## Proposta de valor

**Que problema resolvemos?**
A falta de conteúdo claro, interativo e em português sobre o desmatamento e seus impactos na natureza, que faz muitos jovens não entenderem a gravidade do problema.

**Para quem?**
Estudantes de 12 a 17 anos e professores que buscam recursos para ensinar educação ambiental.

**Como a nossa solução ajuda?**
O EcoTech oferece uma trilha gamificada, com módulos curtos, quizzes, pontos, selos e ranking, além de um catálogo de espécies afetadas pelo desmatamento. Tudo funciona direto no navegador, sem instalação e sem cadastro com senha.

**Que valor entregamos?**
- Aprendizado leve e divertido sobre o desmatamento e a vida terrestre
- Conscientização ambiental com linguagem simples e visual atrativo
- Um recurso gratuito e acessível pelo celular, que o professor pode usar em sala

> O EcoTech transforma o aprendizado sobre desmatamento em uma jornada interativa, ajudando jovens a entender, valorizar e proteger a vida terrestre.

---

## Requisitos

### Requisitos funcionais

| ID | Requisito |
|---|---|
| RF01 | O sistema deve permitir criar um perfil com nome e avatar, salvo no navegador (`localStorage`). |
| RF02 | O sistema deve exibir a trilha com 5 módulos e seus estados: bloqueado, em andamento e concluído. |
| RF03 | O sistema deve exibir o conteúdo educativo de cada módulo (texto, imagem e curiosidade). |
| RF04 | O sistema deve apresentar um quiz ao final de cada módulo, com feedback imediato de acerto ou erro. |
| RF05 | O sistema deve calcular pontos e nível do usuário a partir dos acertos nos quizzes. |
| RF06 | O sistema deve conceder selos de conquista e exibi-los na tela de perfil. |
| RF07 | O sistema deve listar espécies ameaçadas pelo desmatamento, com busca por nome e filtro por bioma. |
| RF08 | O sistema deve exibir a página de detalhe da espécie, com informações e relação com o desmatamento. |
| RF09 | O sistema deve permitir favoritar espécies e consultar os favoritos no perfil. |
| RF10 | O sistema deve exibir um ranking com jogadores de exemplo e a posição do usuário atual. |

### Requisitos não funcionais

| ID | Requisito |
|---|---|
| RNF01 | **Responsividade:** o site deve se adaptar a celulares, tablets e desktops. |
| RNF02 | **Acessibilidade:** o contraste entre texto e fundo deve seguir o nível AA do WCAG. |
| RNF03 | **Acessibilidade:** as imagens devem ter texto alternativo e a navegação deve funcionar por teclado. |
| RNF04 | **Desempenho:** a página inicial deve carregar em até 3 segundos em conexão comum. |
| RNF05 | **Desempenho:** as imagens devem ser otimizadas (formato WebP e tamanho reduzido). |
| RNF06 | **Arquitetura:** o sistema deve funcionar apenas no front-end, sem servidor, usando JSON e `localStorage`. |
| RNF07 | **Compatibilidade:** o site deve funcionar nas versões atuais de Chrome, Edge, Firefox e Safari. |
| RNF08 | **Manutenibilidade:** o código deve ser organizado em componentes reutilizáveis e pastas padronizadas. |
| RNF09 | **Usabilidade:** a interface deve estar em português, com linguagem simples e navegação intuitiva. |
| RNF10 | **Disponibilidade:** o site deve estar publicado online com acesso por HTTPS. |

---

## Histórias de usuário

| ID | História | Critérios de aceitação |
|---|---|---|
| US01 | Como estudante, quero criar meu perfil, para salvar meu progresso. | Informar nome e escolher avatar; o perfil permanece após recarregar a página. |
| US02 | Como estudante, quero ver a trilha de módulos, para saber por onde começar e o que já fiz. | Mostra 5 módulos; módulos futuros aparecem bloqueados; concluídos aparecem marcados. |
| US03 | Como estudante, quero ler um conteúdo curto sobre cada tema, para entender o desmatamento sem esforço. | Cada módulo tem texto breve, imagem e curiosidade; há botão para ir ao quiz. |
| US04 | Como estudante, quero responder quizzes, para testar o que aprendi. | O quiz tem 5 perguntas; mostra se acertou ou errou na hora; exibe a explicação. |
| US05 | Como estudante, quero ganhar pontos e subir de nível, para me sentir motivado a continuar. | Cada acerto soma pontos; o nível atualiza ao atingir a pontuação; o total aparece no topo. |
| US06 | Como estudante, quero conquistar selos, para ver meu progresso de forma divertida. | Selo é liberado ao cumprir o critério; selos bloqueados aparecem em cinza no perfil. |
| US07 | Como estudante, quero buscar espécies por nome e bioma, para encontrar animais que me interessam. | A busca filtra a lista em tempo real; o filtro por bioma funciona; mostra mensagem se não houver resultado. |
| US08 | Como estudante, quero ver como o desmatamento afeta cada espécie, para entender o impacto real. | A página mostra foto, bioma, status de conservação e o texto sobre o impacto. |
| US09 | Como estudante, quero favoritar espécies, para encontrá-las depois com facilidade. | O botão alterna favorito e não favorito; os favoritos aparecem no perfil. |
| US10 | Como professor, quero acompanhar o ranking e o progresso, para incentivar a turma. | O ranking lista posição, nome e pontos; o usuário atual aparece destacado. |

---

## Protótipo

Protótipo navegável com 10 telas, feito no Figma: **_adicionar link_**

| # | Tela |
|---|---|
| 1 | Home |
| 2 | Criar perfil |
| 3 | Trilha (mapa de módulos) |
| 4 | Conteúdo do módulo |
| 5 | Quiz |
| 6 | Resultado |
| 7 | Catálogo de espécies |
| 8 | Detalhe da espécie |
| 9 | Ranking |
| 10 | Perfil e conquistas |

**Fluxo principal:** Home → Criar perfil → Trilha → Conteúdo → Quiz → Resultado → Trilha.

_Adicionar aqui os prints das telas do protótipo, por exemplo:_ `![Home](docs/prototipo-home.png)`

---

## Funcionalidades

- Criação de perfil com nome e avatar (salvo no navegador)
- Trilha com 5 módulos de conteúdo sobre desmatamento
- Quizzes com feedback imediato
- Sistema de pontos, níveis e selos de conquista
- Catálogo de espécies com busca e filtro por bioma
- Página de detalhe de cada espécie e favoritos
- Ranking (jogadores de demonstração + usuário atual)
- Design responsivo, com foco em acessibilidade

> **Observação:** por ser uma aplicação apenas de front-end, o perfil e o progresso ficam salvos no `localStorage` do navegador, e o ranking usa dados de demonstração.

---

## Tecnologias

_(Ajustar conforme o que a equipe realmente usar.)_

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para a navegação entre telas
- CSS (com efeito de vidro e imagens de fundo)
- JSON para os dados de módulos, quizzes, espécies e ranking
- `localStorage` para salvar perfil, progresso e favoritos
- Git e GitHub para versionamento
- GitHub Projects para gestão das tarefas
- Figma para o protótipo
- Vercel / Netlify para o deploy

---

## Framework Utilizado

O projeto usa **React 19** com **Vite** e **React Router 7**.

- **Por que React:** a interface é feita de peças que se repetem (cards de espécie, botões, modal do quiz, barra de progresso). Os componentes reutilizáveis evitam repetição e deixam o código organizado.
- **Por que Vite:** inicia e recarrega rápido, o que ajudou em um prazo curto, e gera uma versão de produção leve para hospedagem estática.
- **Por que React Router:** a aplicação tem várias telas (trilha, módulo, quiz, catálogo, ranking, perfil). Usamos `HashRouter`, que funciona em qualquer hospedagem estática sem configurar redirecionamentos.

---

## Como executar

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18 ou superior e Git.

```bash
# 1. Clonar o repositório
git clone https://github.com/GustavoRibasSilestrino/EcoTech.git

# 2. Entrar na pasta do projeto
cd EcoTech

# 3. Instalar as dependências
npm install

# 4. Rodar em modo de desenvolvimento
npm run dev
```

Depois, abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

---

## Estrutura de pastas

```
public/
├── img/          # foto de destaque e fundo de floresta
├── logo.png
└── icone.png
src/
├── components/   # Navbar, Footer, Layout, CardEspecie, ModalFeedback, Tooltip...
├── context/      # estado global (perfil, pontos, favoritos)
├── data/         # modulos.json, especies.json, ranking.json
├── hooks/        # useLocalStorage
├── pages/        # Home, Trilha, Modulo, Quiz, Resultado, Especies, Ranking, Perfil...
├── styles/       # global.css
├── utils/        # regras de pontos e selos, auxiliares
├── App.jsx
└── main.jsx
```

---

## Aplicação

**Site publicado:** https://ecotech-ten-puce.vercel.app

| Tela | Rota | O que faz |
|---|---|---|
| Início | `/` | Foto de destaque e conteúdo de conscientização: o que é o desmatamento, consequências, biomas, mitos e verdades, ações práticas |
| Criar perfil | `/perfil/criar` | Nome e cor do avatar, salvos no navegador |
| Trilha | `/trilha` | Mapa dos 5 módulos, com desbloqueio progressivo |
| Módulo | `/modulo/:id` | Conteúdo do módulo, com glossário em balões |
| Quiz | `/quiz/:id` | 5 perguntas embaralhadas, 3 vidas, feedback imediato |
| Resultado | `/resultado/:id` | Acertos, pontos ganhos e nível |
| Espécies | `/especies` | Catálogo com busca, autocomplete e filtros |
| Detalhe da espécie | `/especie/:id` | Informações, impacto do desmatamento e favoritar |
| Favoritos | `/favoritos` | Espécies salvas pelo usuário |
| Ranking | `/ranking` | Pódio e lista, com participantes de demonstração |
| Perfil | `/perfil` | Nível, pontos, selos e favoritos |
| Sobre | `/sobre` | ODS, fontes e explicação do projeto |

O site é responsivo: no celular, o menu vira hambúrguer e o título da página inicial fica numa camada abaixo da foto.

---

## Processo de Desenvolvimento

Esta seção explica o que foi feito, por que foi feito e como o projeto foi construído.

### Etapas

1. **Planejamento:** definimos o ODS 15 (com ligação ao ODS 4), o problema (falta de conteúdo claro e interativo sobre desmatamento para jovens), o público-alvo, o benchmarking de 5 soluções, a proposta de valor, os 10 requisitos funcionais, os 10 não funcionais e as histórias de usuário. Tudo está documentado neste README.
2. **Organização:** criamos o quadro no GitHub Projects e as issues, divididas entre os 4 integrantes (Pessoas 1 a 4).
3. **Protótipo:** montamos no Figma as telas principais e o fluxo de navegação.
4. **Desenvolvimento:** construímos o front-end em React, nesta ordem: dados (módulos, quizzes, espécies, ranking), regras de pontos e selos, estado global, componentes reutilizáveis, layout e páginas.
5. **Ajustes visuais e responsividade:** refinamos o visual (fundo de floresta, header transparente, títulos mais discretos) e adaptamos o site para celular.
6. **Publicação:** deploy na Vercel, ligada ao repositório. Cada push na `main` publica uma nova versão.

### Decisões técnicas

| Decisão | Motivo |
|---|---|
| Aplicação apenas de front-end | O escopo do hackathon pede um front-end funcional, e não era necessário servidor |
| Dados em arquivos JSON | Módulos, quizzes, espécies e ranking são conteúdo fixo e simples de manter |
| Perfil, progresso e favoritos no `localStorage` | Permite guardar o avanço sem login e sem back-end |
| Ranking de demonstração | Sem servidor, não há como juntar a pontuação de vários usuários |
| Quiz com perguntas embaralhadas e 3 vidas | Evita decorar posições e torna a experiência mais desafiadora |
| Acessibilidade | Foco visível no teclado, textos alternativos e rótulos ARIA nos controles |

### Divisão de trabalho e gestão

As tarefas foram registradas como issues no GitHub Projects e distribuídas entre os integrantes. O quadro mostra o andamento de cada uma: `A fazer`, `Em andamento` e `Feito`.

### Controle de versão

Os commits seguem o padrão semântico (`feat:`, `style:`, `fix:`, `docs:`, `chore:`) e descrevem alterações reais no código. O código inicial do site foi escrito de uma só vez e depois organizado em commits por funcionalidade (dados, regras, componentes, páginas e estilos). Os ajustes seguintes foram commitados à medida que eram feitos.

---

## Gestão do projeto

As tarefas foram organizadas no **GitHub Projects**, com mais de 50 cards divididos entre os integrantes, nas colunas _A fazer_, _Fazendo_, _Revisão_ e _Feito_.

🔗 **Quadro:** https://github.com/users/GustavoRibasSilestrino/projects/2

_Adicionar aqui um print do quadro:_ `![Quadro](docs/quadro.png)`

---

## Equipe

| Integrante |
Gustavo Ribas Silestrino
Kevin Payão Reisauskas
João Victor Pereira de Souza 
Danilo Pereira da Silva 

---

## Uso de Inteligência Artificial

_(Revisar e ajustar este texto para refletir exatamente o que a equipe fez.)_

Utilizamos o **Claude (Anthropic)** como ferramenta de apoio em algumas etapas do projeto:

| Etapa | Como a IA foi usada |
|---|---|
### Como o Claude (Anthropic) foi usado no projeto

**Todas as decisões do projeto foram tomadas pelos integrantes da equipe.** Isso inclui a escolha do tema, do ODS, do nome EcoTech, do foco em desmatamento, das funcionalidades, do estilo visual e da decisão de fazer um site apenas de front-end. O Claude foi usado como ferramenta de apoio, sem decidir o rumo do projeto.

**Textos da documentação**
- Ajuda para redigir, de forma clara e formal, os textos do README: problema, benchmarking, proposta de valor, requisitos e histórias de usuário. As ideias partiram da equipe, e os textos foram revisados e adaptados por nós.

**Organização do repositório (ajuda parcial)**
- A pedido da equipe, o Claude ajudou a organizar o repositório: subir o README, criar o quadro no GitHub Projects e cadastrar as 55 issues divididas entre os integrantes.
- Nem toda a organização foi feita com IA. O restante foi feito pela equipe.

**Revisão de código (apoio durante o desenvolvimento)**
- O Claude ajudará a revisar o código escrito pela equipe, apontar erros e sugerir correções, que são conferidas e testadas por nós antes de entrarem no projeto.

Todo conteúdo sugerido ou gerado por IA foi lido e validado pelos integrantes.
---

## Créditos e fontes

**Imagens**
- _Listar aqui cada imagem com autor e fonte (Unsplash, Pexels, Pixabay, Wikimedia Commons)._

**Fontes de dados e conteúdo**
- _Listar as fontes consultadas (ex.: MapBiomas, INPE, ICMBio, WWF Brasil)._

---

<p align="center">Feito com 💚 pela equipe EcoTech · Hackathon Front-end Frameworks</p>
