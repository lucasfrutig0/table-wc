import { ReactNode } from 'react'

interface HeaderProos {
  children?: ReactNode
}

export default function Header({ children }: HeaderProos) {
  return (
    <header>
      <h1>header</h1>
      {children}
    </header>
  )
}
