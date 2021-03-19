/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'

import Icon from '@components/Icon'
import styles from './JobView.module.css'

interface Props {
  company: string
  company_logo: string
  created_at: string
  description: string
  how_to_apply: string
  location: string
  title: string
  type: string
}

const JobView: FC<Props> = ({
  company,
  company_logo,
  created_at,
  description,
  how_to_apply,
  location,
  title,
  type,
}) => {
  const setHowToApply = () => {
    return { __html: how_to_apply }
  }

  const setDescription = () => {
    return { __html: description }
  }

  const distanceToNow = (date: string) => formatDistanceToNow(new Date(date), { addSuffix: true })

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
          <div dangerouslySetInnerHTML={setHowToApply()} />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>

        <div className={styles.type}>
          <span>{type}</span>
        </div>

        <div className={styles.created_at}>
          <Icon name="clock-icon" />
          <p>{distanceToNow(created_at)}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.company_logo}>
            <Image
              src={`${company_logo || '/no_image_available.jpg'}`}
              width={90}
              height={90}
              objectFit="contain"
              loading="eager"
            />
          </div>

          <div className={styles.card_content}>
            <div>
              <h2>{company}</h2>
            </div>

            <div className={styles.location}>
              <Icon name="public-icon" />
              <p>{location}</p>
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={setDescription()} />
      </div>
    </div>
  )
}

export default JobView
