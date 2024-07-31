import { FC } from 'react'

interface Props {
  title: string
  text: string
}

const RoadmapCard: FC<Props> = (props) => {
  const { title, text } = props
  return (
    <li>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  )
}

export default RoadmapCard
