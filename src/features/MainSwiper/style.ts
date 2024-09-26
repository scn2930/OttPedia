import styled from 'styled-components';

export const MainSwiperStyle = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 95%;
  height: 500px;

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    background-color: rgba(0, 0, 0, 0.3);
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
