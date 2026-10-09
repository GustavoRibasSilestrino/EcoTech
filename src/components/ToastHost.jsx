import { useApp } from '../context/AppContext'

// Notificações rápidas no canto da tela (somem após 3 segundos).
export default function ToastHost() {
  const { toasts } = useApp()
  return (
    <div className="toast-area" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.tipo}`}>
          {t.mensagem}
        </div>
      ))}
    </div>
  )
}
