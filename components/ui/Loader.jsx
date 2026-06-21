'use client'

import React from 'react'

/**
 * A reusable loader/spinner component
 * @param {Object} props
 * @param {('sm'|'md'|'lg')} [props.size='md' - Loader size
 * @param {string} [props.color='blue'] - Loader color
 */
function Loader({ size = 'md', color = 'blue' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colors = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    green: 'border-green-500',
    red: 'border-red-500'
  }

  return (
    <div
      className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full animate-spin`}
    />
  )
}

export default Loader
