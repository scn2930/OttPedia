import styled from 'styled-components';

export const MainSwiperStyle = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 95%;

  /* swiper navigation hover*/
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper:hover {
    cursor: pointer;
    .swiper-button-next,
    .swiper-button-prev {
      visibility: visible;
    }
  }
  .swiper-wrapper {
    min-height: 150px;
  }
  .swiper-slide {
    width: 100%;
    height: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    visibility: hidden;
  }

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  .mainText {
    width: 30%;
    position: absolute;
    top: 40%;
    left: 5%;
    z-index: 10;
  }
  .mainImg {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 425px) {
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 1rem;
    }
  }
`;

export const MainStyle = styled.div`
  padding-top: 100px;
  color: white;
  overflow: hidden;
`;
