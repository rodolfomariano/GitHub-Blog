import {
  FaCalendarDay,
  FaGithub,
  FaComment,
  FaExternalLinkAlt,
  FaChevronLeft,
} from 'react-icons/fa'
import { PostContainer, PostContent, PostDataCard } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostDataCard>
        <header>
          <a href="">
            <span>
              <FaChevronLeft size={12} />
              VOLTAR
            </span>
          </a>

          <a href="">
            <span>
              VER NO GITHUB <FaExternalLinkAlt size={12} />
            </span>
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <div>
          <span>
            <FaGithub size={18} />
            rodolfomariano
          </span>

          <span>
            <FaCalendarDay size={18} />
            Há 1 dia
          </span>

          <span>
            <FaComment size={18} />3 comentários
          </span>
        </div>
      </PostDataCard>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostContent>
    </PostContainer>
  )
}
