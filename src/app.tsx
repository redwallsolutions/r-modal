import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Modal from './lib'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
const theming = createThemeWithAppearance()
const GlobalS = createGlobalStyle<any>`
  body {
    background: ${props => theming(props).contrast};
  }
`
function App() {
  const [showModal, setShowModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [theme, setTheme] = useState({
    mode: 'light' as any,
  })
  const toggleSecondModal = () => {
    setSecondModal(state => !state)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalS appearance="default" theme={theme} />
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
            title="Cadastrar novo item"
          >
            <div style={{ height: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis diam nulla, a scelerisque enim porta rutrum. Donec a
              nulla in metus interdum auctor egestas vel velit. Suspendisse
              potenti. Pellentesque non urna orci. aaa
              <button onClick={toggleSecondModal}>Toggle Second Modal</button>
              <button
                onClick={() => {
                  setTheme(state => {
                    if (state.mode === 'light') {
                      return { mode: 'dark' }
                    }
                    return { mode: 'light' }
                  })
                }}
              >
                Toggle Darkmode
              </button>
              {secondModal && (
                <Modal
                  onClose={() => setSecondModal(false)}
                  title={
                    <div style={{ width: 20, height: 20, background: 'blue' }}>
                      oi
                    </div>
                  }
                  subTitle="Gerencie todos os menus do seu estabelecimento."
                >
                  <button
                    onClick={() => {
                      setTheme(state => {
                        if (state.mode === 'light') {
                          return { mode: 'dark' }
                        }
                        return { mode: 'light' }
                      })
                    }}
                  >
                    Toggle Darkmode
                  </button>
                </Modal>
              )}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis diam nulla, a scelerisque enim porta rutrum. Donec a
              nulla in metus interdum auctor egestas vel velit. Suspendisse
              potenti. Pellentesque non urna orci. aaa Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus facilisis diam nulla, a
              scelerisque enim porta rutrum. Donec a nulla in metus interdum
              auctor egestas vel velit. Suspendisse potenti. Pellentesque non
              urna orci. aaa Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus facilisis diam nulla, a scelerisque enim porta
              rutrum. Donec a nulla in metus interdum auctor egestas vel velit.
              Suspendisse potenti. Pellentesque non urna orci. aaa Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vivamus facilisis
              diam nulla, a scelerisque enim porta rutrum. Donec a nulla in
              metus interdum auctor egestas vel velit. Suspendisse potenti.
              Pellentesque non urna orci. aaa Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus facilisis diam nulla, a
              scelerisque enim porta rutrum. Donec a nulla in metus interdum
              auctor egestas vel velit. Suspendisse potenti. Pellentesque non
              urna orci. aaa Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus facilisis diam nulla, a scelerisque enim porta
              rutrum. Donec a nulla in metus interdum auctor egestas vel velit.
              Suspendisse potenti. Pellentesque non urna orci. aaa Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vivamus facilisis
              diam nulla, a scelerisque enim porta rutrum. Donec a nulla in
              metus interdum auctor egestas vel velit. Suspendisse potenti.
              Pellentesque non urna orci. aaa
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export { App }
