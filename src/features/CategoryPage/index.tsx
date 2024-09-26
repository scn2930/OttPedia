import SwiperComponent from '@/components/swiper';
import { useRouter } from 'next/router';
import { CategoryStyle } from './style';

const CategoryPage = () => {
  const router = useRouter();
  const category = router.pathname.split('/category/')[1];
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };

  return (
    <CategoryStyle>
      <SwiperComponent keyValue="category1" type={category} routing={ItemRouting} />
      <SwiperComponent keyValue="category2" type={category} routing={ItemRouting} />
      <SwiperComponent keyValue="category3" type={category} routing={ItemRouting} />
    </CategoryStyle>
  );
};

export default CategoryPage;
