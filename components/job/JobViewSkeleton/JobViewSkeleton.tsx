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

      <div className={styles.wrapperBody}>
        <div className={styles.title} />

        <div className={styles.type}>
          <div />
        </div>

        <div className={styles.created_at}>
          <Icon name="clock-icon" />
          <div />
        </div>

        <div className={styles.card}>
          <div className={styles.company_logo}>
            <div />
          </div>

          <div className={styles.card_content}>
            <div className={styles.company}>
              <div />
            </div>

            <div className={styles.location}>
              <Icon name="public-icon" />
              <div />
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <div />
        </div>
      </div>
    </div>
  )
}

export default JobViewSkeleton
