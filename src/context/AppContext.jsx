import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { PONTOS_POR_ACERTO, SELOS, calcularNivel, selosConquistados } from '../utils/gamificacao'

const ESTADO_INICIAL = {
  perfil: null, // { nome, avatar }
  pontos: 0,
  concluidos: {}, // { [idModulo]: { acertos, total } }
  favoritos: [], // ids de espécies
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [estado, setEstado] = useLocalStorage('ecotech:v1', ESTADO_INICIAL)
  const [toasts, setToasts] = useState([])
  const [ultimoResultado, setUltimoResultado] = useState(null)
  const selosAnteriores = useRef(null)

  const notificar = useCallback((mensagem, tipo = 'sucesso') => {
    const id = `${Date.now()}-${Math.random()}`
    setToasts((atual) => [...atual, { id, mensagem, tipo }])
    window.setTimeout(() => setToasts((atual) => atual.filter((t) => t.id !== id)), 3000)
  }, [])

  const selos = useMemo(() => selosConquistados(estado), [estado])

  // avisa quando um selo novo é desbloqueado
  useEffect(() => {
    if (selosAnteriores.current === null) {
      selosAnteriores.current = selos
      return
    }
    const novos = selos.filter((id) => !selosAnteriores.current.includes(id))
    novos.forEach((id) => {
      const selo = SELOS.find((s) => s.id === id)
      notificar(`Selo desbloqueado: ${selo.nome}`, 'selo')
    })
    selosAnteriores.current = selos
  }, [selos, notificar])

  const salvarPerfil = useCallback(
    (perfil) => {
      setEstado((e) => ({ ...e, perfil }))
      notificar('Perfil salvo neste dispositivo!')
    },
    [setEstado, notificar],
  )

  const concluirModulo = useCallback(
    (idModulo, acertos, total) => {
      const anterior = estado.concluidos[idModulo]
      const ganho = Math.max(0, (acertos - (anterior?.acertos ?? 0)) * PONTOS_POR_ACERTO)
      const melhor = !anterior || acertos > anterior.acertos ? { acertos, total } : anterior
      setEstado((e) => ({
        ...e,
        pontos: e.pontos + ganho,
        concluidos: { ...e.concluidos, [idModulo]: melhor },
      }))
      setUltimoResultado({ idModulo, acertos, total, ganho })
    },
    [estado.concluidos, setEstado],
  )

  const alternarFavorito = useCallback(
    (idEspecie) => {
      const jaEra = estado.favoritos.includes(idEspecie)
      setEstado((e) => ({
        ...e,
        favoritos: jaEra ? e.favoritos.filter((f) => f !== idEspecie) : [...e.favoritos, idEspecie],
      }))
      notificar(jaEra ? 'Espécie removida dos favoritos' : 'Espécie salva nos favoritos!', jaEra ? 'aviso' : 'sucesso')
    },
    [estado.favoritos, setEstado, notificar],
  )

  const reiniciarProgresso = useCallback(() => {
    setEstado((e) => ({ ...e, pontos: 0, concluidos: {}, favoritos: [] }))
    setUltimoResultado(null)
    notificar('Progresso reiniciado.', 'aviso')
  }, [setEstado, notificar])

  const valor = {
    ...estado,
    nivel: calcularNivel(estado.pontos),
    selos,
    toasts,
    ultimoResultado,
    notificar,
    salvarPerfil,
    concluirModulo,
    alternarFavorito,
    reiniciarProgresso,
  }

  return <AppContext.Provider value={valor}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp precisa estar dentro de AppProvider')
  return ctx
}
