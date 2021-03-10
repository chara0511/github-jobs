import styles from './JobItemSkeleton.module.css'

const JobItemSkeleton = () => {
  return (
    <div id="content skeleton" className={styles.content}>
      <div className="skeleton">
        <div className={styles.wrapper}>
          <div className={styles.wrapperInner}>
            <div className={styles.wrapperBody}>
              <div className={styles.logo} />
              <div className={styles.company} />
              <div className={styles.title} />
              <div className={styles.fullTime} />
              <div className={styles.location} />
              <div className={styles.createdAt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItemSkeleton
