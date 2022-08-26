import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactLoading from 'react-loading'

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
  LoadingContainer,
  PersonalCard,
  PostsContainer,
  SearchForm,
  UserData,
} from './styles'
import { useEffect, useState } from 'react'
import { RepoIssue } from '../../contexts/issueContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
  const { personalData, repoIssuesData } = useIssue()

  const [postsFiltered, setPostsFiltered] =
    useState<RepoIssue[]>(repoIssuesData)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssue(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const response = repoIssuesData.filter((issue) =>
      issue.title.toLowerCase().includes(data.query),
    )
    setPostsFiltered(response)
    reset()
  }

  useEffect(() => {
    setPostsFiltered(repoIssuesData)
  }, [repoIssuesData])

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

      <SearchForm onSubmit={handleSubmit(handleSearchIssue)}>
        <header>
          <h2>Publicações</h2>

          <span>{repoIssuesData.length} publicações</span>
        </header>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>

      {isSubmitting ? (
        <LoadingContainer>
          <ReactLoading type="bubbles" height={32} color="#3294F8" />
        </LoadingContainer>
      ) : (
        <PostsContainer>
          {postsFiltered.map((issue) => {
            return <PostCard key={issue.id} data={issue} />
          })}
        </PostsContainer>
      )}
    </HomeContainer>
  )
}
