import SwiperComponent from '@/components/swiper';
import { MainStyle } from './style';
import { useRouter } from 'next/router';
import MainSwiper from '../MainSwiper';
import MainBottomPage from '../MainBottomPage';
import { DummyData } from '@/assets/data';

const MainPage = () => {
  const router = useRouter();
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };
  return (
    <MainStyle>
      <MainSwiper data={DummyData} type={'main'} routing={ItemRouting} />
      <MainBottomPage data={DummyData} routing={ItemRouting} />
    </MainStyle>
  );
};

export default MainPage;
