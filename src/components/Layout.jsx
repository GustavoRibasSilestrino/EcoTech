import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Fundo from './Fundo'
import Navbar from './Navbar'
import Footer from './Footer'
import ToastHost from './ToastHost'

// Estrutura comum a todas as páginas: fundo de floresta, cabeçalho, conteúdo (com transição) e rodapé.
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#conteudo" className="pular">
        Pular para o conteúdo
      </a>
      <Fundo />
      <Navbar />
      <main id="conteudo" key={pathname} className={`pagina ${pathname === '/' ? 'pagina-home' : ''}`}>
        <Outlet />
      </main>
      <Footer />
      <ToastHost />
    </>
  )
}
