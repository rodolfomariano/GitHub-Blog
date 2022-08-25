import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { PostCard } from '../../components/PostCard'

import {
  HomeContainer,
  ImageContainer,
  PersonalCard,
  PostsContainer,
  SearchForm,
  UserData,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PersonalCard>
        <ImageContainer>
          <img
            src="https://avatars.githubusercontent.com/u/62636838?v=4"
            alt=""
          />
        </ImageContainer>

        <UserData>
          <header>
            <h1>Rodolfo Mariano de Souza</h1>

            <a
              href="https://github.com/rodolfomariano"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                GITHUB <FaExternalLinkAlt size={12} />
              </span>
            </a>
          </header>

          <p>
            Hi, i am graduated in computer science, I have strong interest in
            frontend. At the moment i am studying Next Js, scss and libraries of
            styles how Chakra UI.
          </p>

          <div>
            <span>
              <FaGithub size={18} />
              rodolfomariano
            </span>

            <span>
              <FaBuilding size={18} />
              compani
            </span>

            <span>
              <FaUserFriends size={18} />
              32 seguidores
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
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
