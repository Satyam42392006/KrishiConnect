'use client'

import React from 'react'

/**
 * A reusable input field component
 * @param {Object} props - Component props
 * @param {string} [props.label] - Input label
 * @param {('text'|'email'|'password'|'number')} [props.type='text'] - Input type
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value (for controlled component)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.className=''] - Additional CSS classes
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : ''

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${baseClasses} ${disabledClasses} ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
