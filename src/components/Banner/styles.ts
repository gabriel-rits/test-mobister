import styled from 'styled-components';

import banner from '../../assets/img/banner.png';

export const Container = styled.section`
  background-color: rgba(31, 18, 64, 1);

  color: white;

  padding-top: 80px;
  padding-bottom: 80px;

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: flex-start;

    h1 {
      font-size: 32px;
    }
    p {
      max-width: 470px;

      line-height: 2;
    }
    @media (max-width: 575px) {
      button {
        width: 100%;
      }
    }
  }

  @media (min-width: 576px) {
    background: linear-gradient(
        90deg,
        rgba(31, 18, 64, 1) 33%,
        rgba(31, 18, 64, 0) 100%
      ),
      url(${banner});
    background-color: rgba(31, 18, 64, 1);
    background-repeat: no-repeat;
    background-position-x: left, right;
    background-size: 100%, auto 100%;
  }
`;
