import { MainStyle, MainSwiperStyle } from './style';
import { useRouter } from 'next/router';
import { DummyData } from '@/assets/data';
import SwiperComponent from '@/components/swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const MainPage = () => {
  const router = useRouter();
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };
  const mainData = DummyData.filter((x: any, i: number) => x.type === 'main')[0];
  const selectData = DummyData.filter((target: any) => target.type !== 'main');
  const tag = ['코미디', '로맨스', '마블', '역주행'];

  return (
    <MainStyle>
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
          {mainData?.list?.map((x: any, i: number) => {
            return (
              <SwiperSlide key={i + 'main'}>
                {x.mainText !== undefined ? (
                  <img className="mainText" src={x.mainText} alt="text" onClick={(e) => ItemRouting(x.id)} />
                ) : (
                  <></>
                )}
                <img className="mainImg" src={x.mainSrc} alt="img" onClick={(e) => ItemRouting(x.id)} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MainSwiperStyle>
      {tag?.map((x: any, i: number) => {
        return <SwiperComponent key={i + 'main'} data={selectData} tag={x} routing={ItemRouting} />;
      })}
    </MainStyle>
  );
};

export default MainPage;
