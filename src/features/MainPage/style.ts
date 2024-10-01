import styled from 'styled-components';

export const MainSwiperStyle = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 95%;
  height: 500px;

  /* swiper navigation hover*/
  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
      visibility: visible;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    visibility: hidden;
  }

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: white;
    font-size: 30px;
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
    height: 500px;
    position: relative;
  }
`;

export const MainStyle = styled.div`
  padding-top: 100px;
  color: white;
  overflow: hidden;
`;
