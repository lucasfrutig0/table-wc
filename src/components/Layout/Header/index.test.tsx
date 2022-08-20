import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Header from '.'

describe('Header Component', () => {
  it('should render withou crashing', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
