import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Logo from '.'

describe('Logo Component', () => {
  it('should render without crashing', () => {
    render(<Logo />)
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
  })
})
