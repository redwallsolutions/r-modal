import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { render } from 'react-dom'
import Modal from './lib'
export function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setShowModal(state => !state)
        }}
      >
        Show
      </button>
      <AnimatePresence>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false)
            }}
          >
            <div style={{ height: 50000 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis diam nulla, a scelerisque enim porta rutrum. Donec a
              nulla in metus interdum auctor egestas vel velit. Suspendisse
              potenti. Pellentesque non urna orci.
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
const root = document.querySelector('#app')
render(<App />, root)
