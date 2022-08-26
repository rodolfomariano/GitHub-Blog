import { Link, useParams } from 'react-router-dom'
import {
  FaCalendarDay,
  FaGithub,
  FaComment,
  FaExternalLinkAlt,
  FaChevronLeft,
} from 'react-icons/fa'

import { PostContainer, PostContent, PostDataCard } from './styles'
import { useIssue } from '../../hooks/useIssue'

import { useEffect } from 'react'
import { dateFormatter } from '../../utils/formatter'

export function Post() {
  const { id } = useParams<string>()

  const convertIdToNumber = Number(id)

  const { post, findIssueById } = useIssue()

  useEffect(() => {
    findIssueById(convertIdToNumber)
  }, [findIssueById, convertIdToNumber])

  return (
    <PostContainer>
      <PostDataCard>
        <header>
          <Link to="/">
            <span>
              <FaChevronLeft size={12} />
              VOLTAR
            </span>
          </Link>

          <a
            href="https://github.com/rodolfomariano"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              VER NO GITHUB <FaExternalLinkAlt size={12} />
            </span>
          </a>
        </header>

        <h1>{post.title}</h1>

        <div>
          <span>
            <FaGithub size={18} />
            {post.user && post.user.login}
          </span>

          <span>
            <FaCalendarDay size={18} />
            {post.created_at && dateFormatter(new Date(post.created_at))}
          </span>

          <span>
            <FaComment size={18} />
            {post.comments} comentários
          </span>
        </div>
      </PostDataCard>

      <PostContent>
        <p>{post.body}</p>
      </PostContent>
    </PostContainer>
  )
}
