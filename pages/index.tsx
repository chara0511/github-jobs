/* eslint-disable camelcase */
import { useState } from 'react'
import useSWR from 'swr'
import ReactPaginate from 'react-paginate'

import { JobItem } from '@components/job'
import { Flex, Jobs, SearchForm } from '@components/ui'
import { fetcher } from '@lib/fetcher'

export interface JobModel {
  company: string
  company_logo: string
  created_at: string
  id: string
  location: string
  title: string
  type: string
}

const PER_PAGE: number = 10

export default function HomePage() {
  const { data, error } = useSWR('/api/jobs', fetcher)
  const [pageCount, setPageCount] = useState(0)

  if (error)
    return (
      <Flex>
        <SearchForm />
        <div style={{ flex: 1 }}>
          <Jobs>
            <h2>Ups!!!</h2>
            <span>An error has ocurred</span>
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
            <h2>Loading ...</h2>
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
