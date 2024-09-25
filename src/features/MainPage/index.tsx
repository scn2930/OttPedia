import SwiperComponent from '@/components/swiper';
import { MainStyle } from './style';
import { useRouter } from 'next/router';

const MainPage = () => {
  const router = useRouter();
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };
  return (
    <MainStyle>
      <SwiperComponent type={'main'} routing={ItemRouting} />
      <p>드라마</p>
      <SwiperComponent type={'drama'} routing={ItemRouting} />
      <p>영화</p>
      <SwiperComponent type={'movie'} routing={ItemRouting} />
      <p>예능</p>
      <SwiperComponent type={'variety'} routing={ItemRouting} />
    </MainStyle>
  );
};

export default MainPage;
