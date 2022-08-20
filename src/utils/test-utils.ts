import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) => {
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

export { customRender as render }
export { setup }
