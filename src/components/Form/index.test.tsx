import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Form from '.'

describe('Form Component', () => {
  it('should render form component without crashing', () => {
    render(<Form />)
    expect(screen.getByText(/form/i)).toBeInTheDocument()
  })
})
