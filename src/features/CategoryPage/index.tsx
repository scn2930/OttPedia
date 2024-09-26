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
      <SwiperComponent type={category} routing={ItemRouting} />
      <SwiperComponent type={category} routing={ItemRouting} />
      <SwiperComponent type={category} routing={ItemRouting} />
    </CategoryStyle>
  );
};

export default CategoryPage;
