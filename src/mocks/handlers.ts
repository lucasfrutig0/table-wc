import { rest } from 'msw'

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get(`${import.meta.env.VITE_BASE_URL}/status`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ account: 'Frutig' }))
  }),
]
