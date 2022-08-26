import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { PostCard } from '../../components/PostCard'
import { useIssue } from '../../hooks/useIssue'

import {
  HomeContainer,
  ImageContainer,
  PersonalCard,
  PostsContainer,
  SearchForm,
  UserData,
} from './styles'

export function Home() {
  const { personalData, repoIssuesData } = useIssue()

  return (
    <HomeContainer>
      <PersonalCard>
        <ImageContainer>
          <img src={personalData.avatarURL} alt="" />
        </ImageContainer>

        <UserData>
          <header>
            <h1>{personalData.name}</h1>

            <a
              href={`https://github.com/${personalData.login}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                GITHUB <FaExternalLinkAlt size={12} />
              </span>
            </a>
          </header>

          <p>{personalData.bio}</p>

          <div>
            <span>
              <FaGithub size={18} />
              {personalData.login}
            </span>

            {personalData.company && (
              <span>
                <FaBuilding size={18} />
                {personalData.company}
              </span>
            )}

            <span>
              <FaUserFriends size={18} />
              {personalData.followers} seguidores
            </span>
          </div>
        </UserData>
      </PersonalCard>

      <SearchForm>
        <header>
          <h2>Publicações</h2>

          <span>6 publicações</span>
        </header>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <PostsContainer>
        {repoIssuesData.map((issue) => {
          return <PostCard key={issue.id} data={issue} />
        })}
      </PostsContainer>
    </HomeContainer>
  )
}
