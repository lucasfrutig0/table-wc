import { ReactNode } from 'react'

import styles from './Layout.module.css'

interface ContainerProps {
  children?: ReactNode
}

export default function Layout({ children }: ContainerProps) {
  return <main className={styles.container}>{children}</main>
}
