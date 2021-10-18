import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  top: 50%;
  right: 16px;
  z-index: 1;
  transform: translateY(-50px);

  padding: 16px;
  border-radius: 50%;
  border: 0;

  background: white;
  cursor: pointer;
  box-shadow: 0px 0px 16px 0px rgb(0, 0, 0, 0.25);

  display: flex;
  align-items: center;

  svg {
    color: #00bf6f;

    width: 24px !important;
    height: 24px !important;
  }
`;
