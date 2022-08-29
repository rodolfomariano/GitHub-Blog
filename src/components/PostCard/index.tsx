import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { dateFormatter } from '../../utils/formatter'
import { PostCardContainer } from './styles'

interface PostCardProps {
  data: {
    id: number
    title: string
    created_at: string
    body: string
    comments: number
    issueNumber: string
  }
}

export function PostCard({ data }: PostCardProps) {
  const navigation = useNavigate()

  function handleSeePostDetails(e: FormEvent) {
    e.preventDefault()

    navigation(`/post/${data.issueNumber}`)
  }
  return (
    <PostCardContainer onClick={handleSeePostDetails}>
      <header>
        <h1>{data.title}</h1>

        <span>{dateFormatter(new Date(data.created_at))}</span>
      </header>

      <div>
        <p>{`${data.body.substr(0, 310)}... `}</p>
      </div>
    </PostCardContainer>
  )
}
