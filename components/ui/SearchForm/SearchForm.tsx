/* eslint-disable camelcase */
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import Icon from '@components/Icon'
import { PrimaryButton } from '@components/Button'
import styles from './SearchForm.module.css'

interface State {
  search: string
  full_time: boolean
  countries: { name: string }[]
  location: string
}

const initialState: State = {
  search: '',
  full_time: false,
  countries: [{ name: 'london' }, { name: 'amsterdam' }, { name: 'new york' }, { name: 'berlin' }],
  location: '',
}

const SearchForm = () => {
  const router = useRouter()
  const [values, setValues] = useState<State>(initialState)
  const { search, full_time, countries, location } = values

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    return setValues({ ...values, [e.target.name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push(
      {
        pathname: `/jobs`,
        query: { search, location, full_time } || {},
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <Icon name="work-icon" />

          <label htmlFor="search">
            <input
              id="search"
              type="text"
              placeholder="Title, companies, expertise or benefits"
              onChange={handleChange}
              name="search"
            />
          </label>

          <div>
            <PrimaryButton />
          </div>
        </div>

        <div className={styles.inputCheckbox}>
          <label htmlFor="fullTime">
            <input
              id="fullTime"
              type="checkbox"
              name="full_time"
              checked={full_time}
              onChange={handleChange}
            />
            Full time
          </label>
        </div>

        <div className={styles.location}>
          <h2>Location</h2>

          <div className={styles.inputText}>
            <Icon name="public-icon" />

            <label htmlFor="location search">
              <input
                id="location search"
                type="text"
                placeholder="City, state, zip code or country"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styles.inputRadio}>
            {countries.map(({ name }) => (
              <label key={name} htmlFor={name}>
                <input
                  type="radio"
                  id={name}
                  name="location"
                  value={name}
                  onChange={handleChange}
                />
                {name}
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
