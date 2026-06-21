'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext()

/**
 * Hook to use the toast system
 * @returns {Object} Toast methods: addToast, removeToast
 */
export function useToast() {
  return useContext(ToastContext)
}

/**
 * Toast component
 * @param {Object} props
 * @param {('info'|'success'|'warning'|'error')} props.type - Toast type
 * @param {string} props.message - Toast message
 * @param {() => void} props.onClose - Function to close
 */
function ToastItem({ type, message, onClose }) {
  const styles = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  }

  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-lg text-white ${styles[type]}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white/80 hover:text-white text-lg">
        &times;
      </button>
    </div>
  )
}

/**
 * Provider component to wrap your app and provide toast functionality
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ type, message }) => {
    const newToast = { id: Date.now(), type, message }
    setToasts(prev => [...prev, newToast])

    setTimeout(() => {
      removeToast(newToast.id)
    }, 3000)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <ToastItem
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastProvider>
  )
}

export default ToastItem
