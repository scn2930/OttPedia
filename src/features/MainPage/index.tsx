import SwiperComponent from '@/components/swiper';
import { MainStyle } from './style';

const MainPage = () => {
  return (
    <MainStyle>
      <SwiperComponent type={'main'} />
      <p>드라마</p>
      <SwiperComponent type={'drama'} />
      <p>영화</p>
      <SwiperComponent type={'movie'} />
      <p>예능</p>
      <SwiperComponent type={'variety'} />
    </MainStyle>
  );
};

export default MainPage;
