import styled from 'styled-components';

export const SwiperStyle = styled.div`
  width: 95%;
  margin-bottom: 80px;

  /* 첫번째 슬라이드는 왼쪽 여백 추가 지정 */
  .swiper-slide:first-child {
    margin-left: 30px;
  }
  /* 이미지 사이즈 조절 */
  .swiper-slide img {
    width: 90%;
    height: 400px;
    border-radius: 10%;
  }
  /* 이미지 hover 효과 */
  .swiper-slide img:hover {
    transform: translate(0, -20px);
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
