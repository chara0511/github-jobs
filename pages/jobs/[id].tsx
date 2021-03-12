import { useRouter } from 'next/router'
import useSWR from 'swr'

import { JobView, JobViewSkeleton } from '@components/job'
import { fetcher } from '@lib/fetcher'

const JobPage = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(
    query.id !== undefined ? [`/api/job?id=${query.id}`] : null,
    fetcher,
  )

  if (error)
    return (
      <div>
        <h2>Ups!!!</h2>
        <span>An error has ocurred</span>
      </div>
    )

  if (!data) return <JobViewSkeleton />

  return <JobView {...data} />
}

export default JobPage
