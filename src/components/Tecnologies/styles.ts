import styled from 'styled-components';

export const Container = styled.section`
  color: #393939;

  background: #f5f7f7;

  padding-top: 80px;
  padding-bottom: 80px;

  .swiper-wrapper {
    padding-top: 10px;
  }

  .content {
    .title {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      column-gap: 40px;

      margin-bottom: 64px;

      img {
        margin-top: 8px;
      }
      h1 {
        line-height: 32px;
      }
    }
    .tecnologies {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
    .icon {
      width: 50px !important;
      height: 50px !important;
    }
    .icon.wordpress {
      color: #21759b;
    }
    .icon.js {
      color: #f7e018;
    }
    .icon.react {
      color: #61dbfb;
    }
    .icon.sass {
      color: #ce679a;
    }
    .icon.laravel {
      color: #ff4638;
    }
  }

  @media (max-width: 575px) {
    .content .tecnologies {
      display: none;
    }
  }
  @media (min-width: 576px) {
    .content .swiper-tecnologies {
      display: none;
    }
    .content .tecnologies {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 768px) {
    .content .tecnologies {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 992px) {
    .content .tecnologies {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
