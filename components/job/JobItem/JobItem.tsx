import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { JobModel } from 'pages'
import Icon from '@components/Icon'
import styles from './JobItem.module.css'

interface Props {
  job: JobModel
}

const JobItem: FC<Props> = ({ job }) => {
  const distanceToNow = (date: string) => formatDistanceToNow(new Date(date), { addSuffix: true })

  return (
    <div className={styles.content}>
      <div>
        <Image
          src={`${job.company_logo ? job.company_logo : '/no_image_available.jpg'}`}
          width={90}
          height={90}
          objectFit="contain"
          loading="lazy"
          className={styles.companyLogo}
        />
      </div>

      <div className={styles.description}>
        <h4>{job.company}</h4>
        <Link href={`/jobs/${job.id}`}>
          <a>
            <h3>{job.title}</h3>
          </a>
        </Link>
        <span>{job.type}</span>

        <div className={styles.footer}>
          <div>
            <Icon name="public-icon" />
            <p>{job.location}</p>
          </div>
          <div>
            <Icon name="clock-icon" />
            <p>{distanceToNow(job.created_at)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
