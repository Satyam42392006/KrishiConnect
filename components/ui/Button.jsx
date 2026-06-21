'use client'

import React from 'react'

/**
 * A reusable button component with different variants and sizes
 * @param {Object} props - Component props
 * @param {('primary'|'secondary'|'danger'|'success')} [props.variant='primary' - Button style variant
 * @param {('sm'|'md'|'lg')} [props.size='md' - Button size
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {() => void} [props.onClick] - Click handler
 * @param {string} [props.className=''] - Additional CSS classes
 */
function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  disabled = false, 
  onClick, 
  className = '', 
  ...props 
}) {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
