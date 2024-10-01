import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperStyle } from './style';
import { useRouter } from 'next/router';

interface TypeProps {
  data: any;
  tag: any;
  routing: any;
}

const SwiperComponent = ({ data, tag, routing }: TypeProps) => {
  const router = useRouter();
  const isCategory = router.pathname.includes('category');
  const item = isCategory
    ? data?.list?.map((x: any) => x).filter((y: any) => y.hash.includes(tag))
    : data.flatMap((x: any) => x.list).filter((x: any) => x.hash.includes(tag));

  return (
    <SwiperStyle>
      <div className="text">
        <p className="tag">{tag}</p>
        <p className="more">더보기</p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 2,
        //   },
        //   640: {
        //     width: 640,
        //     slidesPerView: 3,
        //   },
        //   768: {
        //     width: 768,
        //     slidesPerView: 4,
        //   },
        //   1024: {
        //     width: 1024,
        //     slidesPerView: 6,
        //   },
        // }}
        speed={800}
        navigation
      >
        {item?.map((x: any, i: number) => {
          return (
            <SwiperSlide key={i + 'swiper'}>
              <img src={x.src.src} alt="img" onClick={(e) => routing(x.id)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperStyle>
  );
};

export default SwiperComponent;
