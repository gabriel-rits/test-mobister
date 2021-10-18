import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  background-color: #502582;

  color: white;

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;

    .info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      column-gap: 48px;
      flex: 1;

      img {
        margin-top: 4px;
      }
      p {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
      }
    }
    .register {
      display: flex;
      flex-direction: column;
      row-gap: 30px;

      p {
        font-size: 12px;
        line-height: 2;
        font-weight: 500;
      }
    }
    .register-control {
      display: flex;
      flex-direction: column;
      gap: 12px;

      input {
        color: white;
        font-weight: bold;

        flex: 1;

        border: 2px solid #623b8f;
        border-radius: 6px;
        padding: 12px 16px;

        background: #472174;
        &::placeholder {
          color: #ffffff77;
        }
      }

      @media (min-width: 576px) {
        flex-direction: row;
      }
    }

    @media (min-width: 800px) {
      .register,
      .info {
        max-width: 470px;
      }
    }
  }
`;
