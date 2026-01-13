import React from 'react'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import './Toast.scss'

const Toast = ({ toasts, onRemove }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />
      case 'error':
        return <AlertCircle size={20} />
      case 'warning':
        return <AlertCircle size={20} />
      default:
        return <Info size={20} />
    }
  }

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <div className="toast-icon">
            {getIcon(toast.type)}
          </div>
          <div className="toast-message">
            {toast.message}
          </div>
          <button
            className="toast-close"
            onClick={() => onRemove(toast.id)}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Toast
