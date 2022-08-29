import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { getIssueByNumber, getIssues, getUserData } from '../lib/axios'

interface PersonalData {
  name: string
  avatarURL: string
  bio: string
  login: string
  followers: number
  company: string
}

export interface RepoIssue {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
  issueNumber: string
  html_url: string
  user: {
    login: string
  }
}

export interface Response {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
  number: number
  html_url: string
  user: {
    login: string
  }
}

interface IssueContextProps {
  personalData: PersonalData
  repoIssuesData: RepoIssue[]
  post: RepoIssue
  findPersonalData: () => void
  findIssuesData: () => void
  findIssueByNumber: (issueNumber: string) => void
}

interface IssueContextProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextProps)

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [personalData, setPersonalData] = useState<PersonalData>(
    {} as PersonalData,
  )
  const [repoIssuesData, setRepoIssuesData] = useState<RepoIssue[]>([])
  const [post, setPost] = useState<RepoIssue>({} as RepoIssue)

  async function findPersonalData() {
    const response = await getUserData.get('/users/rodolfomariano')

    try {
      if (response) {
        const {
          name,
          avatar_url: avatarURL,
          bio,
          login,
          followers,
          company,
        } = response.data

        setPersonalData({
          name,
          avatarURL,
          bio,
          login,
          followers,
          company,
        })
        return response.data
      }
    } catch (error) {
      throw new Error('Não foi possível encontrar os dados')
    }
  }

  const findIssuesData = useCallback(async () => {
    const response = await getIssues.get(
      'issues?q=%20repo:rodolfomariano/GitHub-Blog',
    )

    try {
      if (response) {
        const issues: Response[] = response.data.items

        const responseEdit = issues.map((issue) => {
          return {
            id: issue.id,
            title: issue.title,
            created_at: issue.created_at,
            body: issue.body,
            comments: issue.comments,
            issueNumber: issue.number.toString(),
            html_url: issue.html_url,
            user: {
              login: issue.user.login,
            },
          }
        })

        setRepoIssuesData(responseEdit)
      }
    } catch (error) {
      throw new Error('Não foi possível encontrar os dados')
    }
  }, [])

  const findIssueByNumber = useCallback(async (issueNumber: string) => {
    const response = await getIssueByNumber.get(`${issueNumber}`)

    const postResponse = response.data as RepoIssue

    setPost(postResponse)
    return postResponse
  }, [])

  useEffect(() => {
    findPersonalData()
    findIssuesData()
  }, [findIssuesData])

  return (
    <IssueContext.Provider
      value={{
        personalData,
        repoIssuesData,
        post,
        findPersonalData,
        findIssuesData,
        findIssueByNumber,
      }}
    >
      {children}
    </IssueContext.Provider>
  )
}
