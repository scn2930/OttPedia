import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainSwiperStyle } from './style';

interface Props {
  data: any;
  type: string;
  routing: any;
}

const MainSwiper = ({ data, type, routing }: Props) => {
  const selectedData = data.filter((x: any, i: number) => x.type === type)[0];

  return (
    <MainSwiperStyle>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          // 마우스 제어 이후 자동 재생을 막을지 말지
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation
        loop={true}
      >
        {selectedData?.list?.map((x: any, i: number) => {
          return (
            <SwiperSlide key={i + 'main'}>
              {x.mainText !== undefined ? (
                <img className="mainText" src={x.mainText} alt="text" onClick={(e) => routing(x.id)} />
              ) : (
                <></>
              )}
              <img className="mainImg" src={x.mainSrc} alt="img" onClick={(e) => routing(x.id)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MainSwiperStyle>
  );
};

export default MainSwiper;
