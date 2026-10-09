import modulos from '../data/modulos.json'

export const PONTOS_POR_ACERTO = 10
export const PONTOS_POR_NIVEL = 50
export const VIDAS_INICIAIS = 3

const NOMES_NIVEL = ['Semente', 'Broto', 'Muda', 'Arbusto', 'Árvore', 'Floresta']

export function calcularNivel(pontos) {
  const nivel = Math.floor(pontos / PONTOS_POR_NIVEL) + 1
  const nome = NOMES_NIVEL[Math.min(nivel - 1, NOMES_NIVEL.length - 1)]
  const noNivel = pontos % PONTOS_POR_NIVEL
  return { nivel, nome, noNivel, falta: PONTOS_POR_NIVEL - noNivel, percentual: (noNivel / PONTOS_POR_NIVEL) * 100 }
}

export const SELOS = [
  {
    id: 'primeiro-passo',
    nome: 'Primeiro Passo',
    icone: 'passos',
    criterio: 'Concluir o módulo 1',
    check: (e) => Boolean(e.concluidos[1]),
  },
  {
    id: 'guardiao',
    nome: 'Guardião da Floresta',
    icone: 'escudo',
    criterio: 'Acertar todas as perguntas de um quiz',
    check: (e) => Object.values(e.concluidos).some((r) => r.acertos === r.total),
  },
  {
    id: 'explorador',
    nome: 'Explorador',
    icone: 'bussola',
    criterio: 'Favoritar 3 espécies',
    check: (e) => e.favoritos.length >= 3,
  },
  {
    id: 'mestre-verde',
    nome: 'Mestre Verde',
    icone: 'folha',
    criterio: 'Chegar ao nível 3',
    check: (e) => calcularNivel(e.pontos).nivel >= 3,
  },
  {
    id: 'trilha-completa',
    nome: 'Trilha Completa',
    icone: 'trofeu',
    criterio: 'Concluir os 5 módulos',
    check: (e) => modulos.every((m) => e.concluidos[m.id]),
  },
]

export function selosConquistados(estado) {
  return SELOS.filter((s) => s.check(estado)).map((s) => s.id)
}

// Fisher-Yates
export function embaralhar(lista) {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

// Embaralha a ordem das perguntas e das alternativas, mantendo a resposta correta.
export function prepararQuiz(modulo) {
  return embaralhar(modulo.quiz).map((q) => {
    const opcoes = embaralhar(q.opcoes.map((texto, i) => ({ texto, correta: i === q.correta })))
    return {
      pergunta: q.pergunta,
      explicacao: q.explicacao,
      opcoes,
      textoCorreto: q.opcoes[q.correta],
    }
  })
}

export const AVATARES = ['#e0a526', '#3fae6a', '#3b82c4', '#d5545a', '#8b7bd8', '#1ea99a', '#d46a9a', '#7c8a9a']

export const RISCOS = {
  estavel: { rotulo: 'Estável', classe: 'risco-estavel' },
  vulneravel: { rotulo: 'Vulnerável', classe: 'risco-vulneravel' },
  critico: { rotulo: 'Crítico', classe: 'risco-critico' },
}

export const GLOSSARIO = [
  { termo: 'biodiversidade', definicao: 'A variedade de seres vivos (animais, plantas, fungos e microrganismos) de um lugar.' },
  { termo: 'fragmentação', definicao: 'Quando uma floresta é dividida em pedaços isolados por estradas, pastos ou cidades.' },
  { termo: 'habitat', definicao: 'O ambiente natural onde uma espécie vive e encontra alimento e abrigo.' },
  { termo: 'erosão', definicao: 'O desgaste do solo, que é arrastado pela chuva e pelo vento.' },
  { termo: 'assoreamento', definicao: 'O acúmulo de terra e sedimentos no leito de rios e lagos.' },
  { termo: 'reflorestamento', definicao: 'O plantio de árvores para recuperar áreas que perderam a vegetação.' },
  { termo: 'extinção', definicao: 'O desaparecimento total de uma espécie.' },
]
