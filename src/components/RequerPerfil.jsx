import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

// Protege telas que dependem de perfil: sem perfil, leva para "Criar perfil".
export default function RequerPerfil({ children }) {
  const { perfil } = useApp()
  return perfil ? children : <Navigate to="/perfil/criar" replace />
}
