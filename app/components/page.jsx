'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Button, Input, Modal, Loader, useToast } from '../../components/ui'

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { addToast } = useToast()

  const handleDemoClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      addToast({ type: 'success', message: 'Operation completed successfully!' })
    }, 2000)
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Component Showcase</h1>

          {/* Button Section */}
          <section className="mb-12 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </section>

          {/* Input Section */}
          <section className="mb-12 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Inputs</h2>
            <div className="flex flex-col gap-4 max-w-md">
              <Input label="Text Input" placeholder="Type something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <Input label="Email" type="email" placeholder="email@example.com" />
              <Input label="Password" type="password" placeholder="Enter your password" />
              <Input label="Disabled Input" disabled placeholder="This input is disabled" />
            </div>
          </section>

          {/* Modal Section */}
          <section className="mb-12 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Modal</h2>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
              <p className="text-gray-700 mb-6">
                This is a modal component! You can put any content here.
              </p>
              <div className="flex justify-end gap-3">
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
              </div>
            </Modal>
          </section>

          {/* Loader Section */}
          <section className="mb-12 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Loader</h2>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Loader size="sm" color="blue" />
                <span className="text-sm text-gray-600">Small Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loader size="md" color="green" />
                <span className="text-sm text-gray-600">Medium Green</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loader size="lg" color="red" />
                <span className="text-sm text-gray-600">Large Red</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  {isLoading && <Loader size="md" color="blue" />}
                  <Button onClick={handleDemoClick} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Simulate Loading'}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Toast Section */}
          <section className="mb-12 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Toasts</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => addToast({ type: 'info', message: 'This is an info toast!' })}>Show Info Toast</Button>
              <Button variant="success" onClick={() => addToast({ type: 'success', message: 'Success! Operation complete.' })}>Show Success Toast</Button>
              <Button variant="secondary" onClick={() => addToast({ type: 'warning', message: 'Warning! Be careful!' })}>Show Warning Toast</Button>
              <Button variant="danger" onClick={() => addToast({ type: 'error', message: 'Error! Something went wrong!' })}>Show Error Toast</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
