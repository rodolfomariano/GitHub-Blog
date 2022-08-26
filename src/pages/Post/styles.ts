import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PostDataCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 32px;

  header {
    margin-bottom: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      span {
        color: ${({ theme }) => theme['brand-blue']};
        font-size: 12px;
        border-bottom: 1px solid transparent;
        text-transform: uppercase;
        transition: 300ms;

        display: flex;
        align-items: center;
        gap: 8px;

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme['brand-blue']};
        }
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
    line-height: 130%;
  }

  div {
    margin-top: 8px;

    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    span {
      color: ${({ theme }) => theme['base-label']};

      flex: none;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
      }
    }
  }
`
export const PostContent = styled.div`
  padding: 40px 2rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 160%;
  }

  a {
    color: ${({ theme }) => theme['brand-blue']};
    transition: 300ms;

    &:hover {
      filter: brightness(0.8);
    }
  }

  p + p {
    margin-top: 2rem;
  }

  code {
    display: block;

    width: 100%;
    background-color: ${({ theme }) => theme['base-code-post']};
    padding: 16px;
    margin: 1.5rem 0;
  }
`
