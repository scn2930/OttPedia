import styled from 'styled-components';

export const SwiperStyle = styled.div`
  margin-bottom: 80px;
  width: 95%;

  /* swiper 위 글자 스타일 */
  .text {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0;
    padding: 0 2%;
  }
  .tag {
    font-size: 2rem;
    font-weight: bold;
  }
  .more {
    font-size: 1rem;
  }

  /* swiper 스타일 */
  .swiper {
    overflow: visible;
    height: auto;
  }
  /* swiper navigation hover*/
  &:hover {
    cursor: pointer;
    .swiper-button-next,
    .swiper-button-prev {
      visibility: visible;
    }
  }
  .swiper-slide img {
    transition: transform 0.4s ease-in-out;
  }
  .swiper-slide:hover img {
    transform: translate(0, -20px);
  }
  /* 이미지 사이즈 조절 */
  .swiper-slide img {
    width: 90%;
    height: auto;
    border-radius: 10%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    visibility: hidden;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }

  /* 화살표 크기 조정 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    .tag {
      font-size: 1.5rem;
    }
    .more {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 320px) {
    .tag {
      font-size: 1.3rem;
    }
    .more {
      font-size: 0.8rem;
    }
  }
`;
