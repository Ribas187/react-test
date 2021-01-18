import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  .input-group {
    width: 100%;

    span {
      display: block;
      font-size: 15px;
      margin-bottom: 2px;
    }
  }

  .inputs-group {
    display: flex;
    gap: 10px;
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 520px) {
    .inputs-group {
      flex-direction: column;
    }
  }
`;
