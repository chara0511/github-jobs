import { FC } from 'react'

import styles from './Jobs.module.css'

const Jobs: FC = ({ children }) => <div className={styles.content}>{children}</div>

export default Jobs
