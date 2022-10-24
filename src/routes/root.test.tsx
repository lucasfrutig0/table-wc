import { screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { render, userEvent } from '@/utils/test-utils'

import Root from './root'

describe('Root Component', () => {
  it('should render root component without crashing', () => {
    render(<Root />)
    expect(screen.getByText(/list players/i)).toBeInTheDocument()
  })

  it('should call api after click', async () => {
    userEvent.setup()
    render(<Root />)
    expect(screen.getByRole('button')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(screen.getByText(/frutig/i)).toBeInTheDocument())
  })
})
