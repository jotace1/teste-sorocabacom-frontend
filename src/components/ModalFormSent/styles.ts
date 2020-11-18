import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  svg {
    color: #7dede2;
  }
`;

export const OkButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  border: none;
  background: #63c7a9;
  color: #fff;
  padding: 15px 0;
  width: 249px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade('0.2', '#63c7a9')};
  }
`;
