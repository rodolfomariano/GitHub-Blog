import { useContext } from 'react'
import { IssueContext } from '../contexts/issueContext'

function useIssue() {
  const context = useContext(IssueContext)

  return context
}

export { useIssue }
