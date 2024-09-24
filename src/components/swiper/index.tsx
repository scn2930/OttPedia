import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { Data } from '@/assets/data';
import { SwiperStyle, MainSwiperStyle } from './style';
import Image from 'next/image';

interface TypeProps {
  type: string;
}

const SwiperComponent = (props: TypeProps) => {
  const selectData = Data.filter((target: any) => target.type.includes(props.type));
  console.log(selectData);

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
          >
            {selectData?.map((x: any, i: number) => {
              return (
                <>
                  <SwiperSlide key={i + 'data'}>
                    <Image src={x.mainSrc} width={1400} height={500} alt="img" />
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
                    <Image src={x.src} width={250} height={400} alt="img" />
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
