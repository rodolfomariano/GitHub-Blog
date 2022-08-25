import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 416px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-code-post']};

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
    line-height: 160%;
  }
`
