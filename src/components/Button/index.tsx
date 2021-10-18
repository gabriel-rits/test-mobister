import styled from 'styled-components';

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;

  padding: 12px 40px;
  border: none;
  border-radius: 6px;

  transition: 0.3s letter-spacing;

  &.red {
    color: white;
    background-color: #d70a51;
  }
  &.white {
    color: #d70a51;
    background-color: white;
  }
  &:hover {
    cursor: pointer;

    letter-spacing: 1.5px;
  }
`;
