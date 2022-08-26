import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PersonalCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 32px;

  display: flex;
  gap: 32px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  header {
    padding-top: 8px;
    margin-bottom: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      span {
        color: ${({ theme }) => theme['brand-blue']};
        font-size: 12px;
        border-bottom: 1px solid transparent;
        transition: 300ms;

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme['brand-blue']};
        }

        svg {
          margin-left: 8px;
        }
      }
    }
  }

  p {
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    span {
      color: ${({ theme }) => theme['base-subtitle']};

      flex: none;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`
export const ImageContainer = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};

  img {
    max-width: 148px;
    max-height: 148px;
  }
`
export const SearchForm = styled.form`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 12px;

  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    padding: 12px 16px;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
export const LoadingContainer = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostsContainer = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(316px, 1fr));
  justify-content: center;
  justify-items: center;
`
