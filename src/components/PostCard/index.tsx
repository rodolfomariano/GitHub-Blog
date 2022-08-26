import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface PostCardProps {
  data: {
    id: number
    title: string
    created_at: string
    body: string
    comments: number
    number: number
  }
}

export function PostCard({ data }: PostCardProps) {
  const navigation = useNavigate()

  function handleSeePostDetails(e: FormEvent) {
    e.preventDefault()

    navigation(`/post/${JSON.stringify(data.id)}`)
  }
  return (
    <PostCardContainer onClick={handleSeePostDetails}>
      <header>
        <h1>{data.title}</h1>

        <span>{data.created_at}</span>
      </header>

      <p>{`${data.body.substr(0, 310)}... `}</p>
    </PostCardContainer>
  )
}
