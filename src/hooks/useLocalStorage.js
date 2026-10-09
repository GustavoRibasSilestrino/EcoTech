import { useEffect, useState } from 'react'

// Lê e grava um valor no localStorage, sem quebrar se o navegador bloquear o acesso.
export default function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = window.localStorage.getItem(chave)
      return salvo ? { ...valorInicial, ...JSON.parse(salvo) } : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      /* armazenamento indisponível: o app continua funcionando sem salvar */
    }
  }, [chave, valor])

  return [valor, setValor]
}
