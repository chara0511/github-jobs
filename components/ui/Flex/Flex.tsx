import { FC, ReactNode } from 'react'
import styles from './Flex.module.css'

interface Props {
  children: ReactNode
}

const Flex: FC<Props> = ({ children }) => <div className={styles.content}>{children}</div>

export default Flex
