import styled from 'styled-components';

import { shade } from 'polished';
import ModalUI from '@material-ui/core/Modal';

export const Form = styled.div`
  margin-top: 40px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  row-gap: 10px;

  button {
    height: 60px;
    background: #04d361;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  .filter-button {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #search-area {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  input {
    width: 100%;
    flex: 1;
    height: 60px;
    padding: 20px 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  .search-button {
    width: 210px;
    border-radius: 0 5px 5px 0;
  }

  @media (max-width: 588px) {
    & {
      flex-direction: column;

      #search-area {
        flex-direction: column;
        row-gap: 5px;
      }

      input,
      .search-button {
        border-radius: 5px;
        width: 100%;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Modal = styled(ModalUI)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filters = styled.div`
  background: #f0f0f5;
  padding: 20px 20px;
  border-radius: 5px;
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > strong {
    font-size: 20px;
  }

  select,
  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    width: 100%;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 50px;
    background: #04d361;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    width: 100%;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 520px) {
    width: 98vw;
  }
`;

export const Select = styled.select``;
