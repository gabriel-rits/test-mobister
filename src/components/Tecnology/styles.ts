import styled from 'styled-components';

export const Container = styled.div`
  min-height: 225px;
  border-radius: 6px;
  padding: 40px 40px 30px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  transition: 0.3s all;
  background: #fff;

  &:hover {
    transform: translateY(-10px);
  }
  &::after {
    content: '';

    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);

    height: 5px;
    width: 85%;
    border-radius: 0 0 32px 32px;

    transition: 0.3s all;
    background-color: #d70a51;
  }
  &:hover::after {
    height: 10px;
    bottom: -10px;
  }
  strong {
    font-size: 24px;
  }
`;
