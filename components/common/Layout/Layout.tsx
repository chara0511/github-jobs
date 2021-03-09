import { FC } from 'react'
import { Footer, Navbar } from '@components/common'
import styles from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
