import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${({ theme }) => theme['base-title']};
  }

  input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`
