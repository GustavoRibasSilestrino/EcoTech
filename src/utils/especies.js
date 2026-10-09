export function classeBioma(bioma) {
  return 'bioma-' + bioma.normalize('NFD').replace(/[^a-zA-Z]/g, '').toLowerCase()
}

export function siglaDe(nome) {
  return nome
    .split(/[\s-]+/)
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}
