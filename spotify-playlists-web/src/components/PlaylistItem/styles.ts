import styled from 'styled-components';

export const Container = styled.a`
  background: #f0f0f5;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  #content {
    display: flex;
    align-items: center;

    width: 100%;

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      span {
        display: block;
        text-decoration: none;
        color: #a8a8b6;
      }

      p {
        font-size: 18px;
        color: #a8a8b6;
        margin-top: 4px;
      }
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 10px;
  }
`;
