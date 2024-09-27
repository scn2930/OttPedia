import SwiperComponent from '@/components/swiper';
import { useRouter } from 'next/router';
import { CategoryStyle } from './style';
import { DummyData } from '@/assets/data';

const CategoryPage = () => {
  const router = useRouter();
  const category = router.pathname.split('/category/')[1];
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };

  return (
    <CategoryStyle>
      <SwiperComponent data={DummyData} type={category} routing={ItemRouting} />
      <SwiperComponent data={DummyData} type={category} routing={ItemRouting} />
      <SwiperComponent data={DummyData} type={category} routing={ItemRouting} />
    </CategoryStyle>
  );
};

export default CategoryPage;
