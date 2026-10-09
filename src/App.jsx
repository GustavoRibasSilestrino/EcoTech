import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import RequerPerfil from './components/RequerPerfil'
import CriarPerfil from './pages/CriarPerfil'
import EspecieDetalhe from './pages/EspecieDetalhe'
import Especies from './pages/Especies'
import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Modulo from './pages/Modulo'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
import Quiz from './pages/Quiz'
import Ranking from './pages/Ranking'
import Resultado from './pages/Resultado'
import Sobre from './pages/Sobre'
import Trilha from './pages/Trilha'

const protegida = (elemento) => <RequerPerfil>{elemento}</RequerPerfil>

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/criar" element={<CriarPerfil />} />
        <Route path="/trilha" element={protegida(<Trilha />)} />
        <Route path="/modulo/:id" element={protegida(<Modulo />)} />
        <Route path="/quiz/:id" element={protegida(<Quiz />)} />
        <Route path="/resultado/:id" element={protegida(<Resultado />)} />
        <Route path="/especies" element={<Especies />} />
        <Route path="/especie/:id" element={<EspecieDetalhe />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/perfil" element={protegida(<Perfil />)} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
