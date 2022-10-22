// import { Outlet, Link } from 'react-router-dom'

import { fetchAPI } from '@/services/fetchAPI'

export default function Root() {
  fetchAPI('status')
  return <h1>List Players</h1>
}
