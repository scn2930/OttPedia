import styled from 'styled-components';

export const MainSwiperStyle = styled.div`
  margin-bottom: 80px;

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const SwiperStyle = styled.div`
  margin-bottom: 80px;

  /* 첫번째 슬라이드는 왼쪽 여백 추가 지정 */
  .swiper-slide:first-child {
    margin-left: 30px;
  }
  /* 이미지 사이즈 조절 */
  .swiper-slide img {
    /* object-fit: contain; */
    border-radius: 10%;
  }
  /* 이미지 hover 효과 */
  .swiper-slide img:hover {
    /* scale: 0.9; */
    transform: translate(0, -20px);
    /* border-radius: 50%; */
  }

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;
