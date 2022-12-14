import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {
  FaCalendarDay,
  FaGithub,
  FaComment,
  FaExternalLinkAlt,
  FaChevronLeft,
} from 'react-icons/fa'

import { PostContainer, PostContent, PostDataCard } from './styles'
import { useIssue } from '../../hooks/useIssue'

import { dateFormatter } from '../../utils/formatter'

export function Post() {
  const { issueNumber } = useParams<string>()

  const { post, findIssueByNumber } = useIssue()

  useEffect(() => {
    if (issueNumber) {
      findIssueByNumber(issueNumber)
    }
  }, [findIssueByNumber, issueNumber])

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

          <a href={post.html_url} target="_blank" rel="noreferrer">
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
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
