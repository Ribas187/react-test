import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > img {
    width: 200px;
  }

  #not-found {
    width: 100%;

    display: flex;
    justify-content: center;

    strong {
      font-size: 30px;
      color: #d6d6d6;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Playlists = styled.div`
  margin-top: 80px;
`;

export const Pagination = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  color: #f0f0f5;

  button {
    background: none;
    border: none;

    svg {
      color: #f0f0f5;
      transition: color 0.2;
    }

    &:hover {
      svg {
        color: ${darken(0.1, '#f0f0f5')};
      }
    }
  }
`;
