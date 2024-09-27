import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperStyle } from './style';

interface TypeProps {
  data: any;
  type: string;
  routing: any;
}

const SwiperComponent = ({ data, type, routing }: TypeProps) => {
  const selectedData = data.filter((target: any) => target.type === type)[0];

  return (
    <>
      <SwiperStyle>
        <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={5} navigation>
          {selectedData?.list?.map((x: any, i: number) => {
            return (
              <SwiperSlide key={i + 'swiper'}>
                <img src={x.src.src} alt="img" onClick={(e) => routing(x.id)} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperStyle>
    </>
  );
};

export default SwiperComponent;
