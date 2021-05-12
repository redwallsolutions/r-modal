import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import Modal from '../index'
beforeEach(cleanup)
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})
describe('r-modal component', () => {
  it('should execute onClose on clickOverlay', () => {
    const onClose = jest.fn()
    render(<Modal onClose={onClose} />)
    fireEvent.click(screen.getByTestId('overlay'))
    expect(onClose).toBeCalled()
  })
})
