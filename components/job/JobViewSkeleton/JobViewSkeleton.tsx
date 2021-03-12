import Icon from '@components/Icon'
import Link from 'next/link'

import styles from './JobViewSkeleton.module.css'

const JobViewSkeleton = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contact}>
        <Link href="/">
          <a>
            <Icon name="arrow-icon" /> <span>Back to search</span>
          </a>
        </Link>

        <div className={styles.how_to_apply}>
          <span>How To Apply</span>
          <div />
        </div>
      </div>

      <div className={`${styles.details} ${styles.wrapperBody}`}>
        <div className={styles.title} />
        <div className={styles.type} />

        <div className={styles.created_at}>
          <Icon name="clock-icon" />
          <div />
        </div>

        <div className={styles.logo}>
          <div />
        </div>

        <div className={styles.company}>
          <div />
        </div>

        <div className={styles.location}>
          <Icon name="public-icon" />
          <div />
        </div>

        <div className={styles.text1} />
        <div className={styles.text2} />
        <div className={styles.text3} />
        <div className={styles.text4} />
        <div className={styles.text5} />
      </div>
    </div>
  )
}

export default JobViewSkeleton
