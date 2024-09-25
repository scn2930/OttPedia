import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Data } from '@/assets/data';
import { SwiperStyle, MainSwiperStyle } from './style';

interface TypeProps {
  type: string;
  routing: any;
}

const SwiperComponent = (props: TypeProps) => {
  const selectData = Data.filter((target: any) => target.type.includes(props.type));
  return (
    <>
      {props.type === 'main' ? (
        <MainSwiperStyle>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              // 마우스 제어 이후 자동 재생을 막을지 말지
              disableOnInteraction: false,
            }}
            navigation
            loop={true}
          >
            {selectData?.map((x: any, i: number) => {
              return (
                <>
                  <SwiperSlide key={i + 'data'}>
                    {x.mainText !== undefined ? (
                      <img className="mainText" src={x.mainText} alt="text" onClick={(e) => props.routing(x.id)} />
                    ) : (
                      <></>
                    )}
                    <img className="mainImg" src={x.mainSrc} alt="img" onClick={(e) => props.routing(x.id)} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </MainSwiperStyle>
      ) : (
        <SwiperStyle>
          <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={5} navigation>
            {selectData?.map((x: any, i: number) => {
              return (
                <>
                  <SwiperSlide key={i + 'data'}>
                    <img src={x.src.src} alt="img" onClick={(e) => props.routing(x.id)} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </SwiperStyle>
      )}
    </>
  );
};

export default SwiperComponent;
