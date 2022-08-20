import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Layout from '.'

describe('Layout Test', () => {
  it('should render without crashing', () => {
    render(
      <Layout>
        <p>Some content</p>
      </Layout>,
    )

    expect(screen.getByText(/some content/i)).toBeInTheDocument()
  })
})
