import React, { useEffect, useRef } from 'react'
import './ConfirmDialog.scss'

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Confirmer', cancelText = 'Annuler', isDangerous = false }) => {
  const dialogRef = useRef(null)
  const confirmButtonRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Focus le bouton de confirmation à l'ouverture
      if (confirmButtonRef.current) {
        confirmButtonRef.current.focus()
      }

      // Gestion de la touche Escape
      const handleEscape = (e) => {
        if (e.key === 'Escape' && onCancel) {
          onCancel()
        }
      }

      // Empêcher le scroll du body quand le dialog est ouvert
      document.body.style.overflow = 'hidden'

      document.addEventListener('keydown', handleEscape)

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onCancel])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onCancel) {
      onCancel()
    }
  }

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="confirm-overlay" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-message"
    >
      <div className="confirm-dialog" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
        <h3 id="confirm-dialog-title">{title}</h3>
        <p id="confirm-dialog-message">{message}</p>
        <div className="confirm-actions">
          <button className="btn-cancel" onClick={handleCancel}>
            {cancelText}
          </button>
          <button 
            ref={confirmButtonRef}
            className={`btn-confirm ${isDangerous ? 'btn-danger' : 'btn-primary'}`}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
