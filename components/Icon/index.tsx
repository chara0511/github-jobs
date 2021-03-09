import { ArrowIcon, ClockIcon, ErrorIcon, PublicIcon, WorkIcon } from '@components/icons'
import { FC } from 'react'

interface Props {
  name: string
}

const Icon: FC<Props> = ({ name }) => {
  switch (name) {
    case 'arrow-icon':
      return <ArrowIcon />

    case 'work-icon':
      return <WorkIcon />

    case 'public-icon':
      return <PublicIcon />

    case 'clock-icon':
      return <ClockIcon />

    default:
      return <ErrorIcon />
  }
}

export default Icon
