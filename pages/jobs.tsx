import { useState } from 'react'
import useSWR from 'swr'
import ReactPaginate from 'react-paginate'

import { JobItem, JobItemSkeleton } from '@components/job'
import { Flex, Jobs, SearchForm } from '@components/ui'
import { useRouter } from 'next/router'
import { JobModel } from 'pages'
import { fetcher } from '@lib/fetcher'

const PER_PAGE: number = 10

const JobsPage = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    router.query.search !== '' || router.query.location !== ''
      ? [
          `/api/jobs?search=${router.query.search}&location=${router.query.location}&full_time=${router.query.full_time}`,
        ]
      : '/api/jobs',
    fetcher,
  )
  const [pageCount, setPageCount] = useState(0)

  if (error)
    return (
      <Flex>
        <SearchForm />
        <div style={{ flex: 1 }}>
          <Jobs>
            <div style={{ textAlign: 'center' }}>
              <h2>Ups!!!</h2>
              <span>An error has ocurred</span>
            </div>
          </Jobs>
        </div>
      </Flex>
    )

  if (!data)
    return (
      <Flex>
        <SearchForm />
        <div style={{ flex: 1 }}>
          <Jobs>
            <JobItemSkeleton />
            <JobItemSkeleton />
            <JobItemSkeleton />
          </Jobs>
        </div>
      </Flex>
    )

  const handlePageClick = (data: { selected: number }) => {
    setPageCount(data.selected * PER_PAGE)
  }

  return (
    <Flex>
      <SearchForm />
      <div style={{ flex: 1 }}>
        <h2 style={{ paddingLeft: '1rem' }}>Results</h2>
        <Jobs>
          {Object.keys(data).length === 0 ? (
            <h2>Not Found</h2>
          ) : (
            data
              .slice(pageCount, pageCount + PER_PAGE)
              .map((j: JobModel) => <JobItem key={j.id} job={j} />)
          )}
        </Jobs>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(data?.length / PER_PAGE)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    </Flex>
  )
}

export default JobsPage
