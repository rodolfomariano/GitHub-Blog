import styled from 'styled-components'

export const PostCardContainer = styled.button`
  max-width: 416px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-code-post']};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme['base-code-post']};
  transition: 300ms;

  header {
    margin-bottom: 1.25rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.25rem;
      line-height: 160%;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    text-align: start;
    line-height: 160%;
    color: ${({ theme }) => theme['base-text']};
  }

  &:hover {
    border-color: ${({ theme }) => theme['brand-blue']};
  }
`
