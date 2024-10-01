import { useRouter } from 'next/router';
import { CategoryStyle } from './style';
import { DummyData } from '@/assets/data';
import SwiperComponent from '@/components/swiper';

const CategoryPage = () => {
  const router = useRouter();
  const category = router.pathname.split('/category/')[1];
  const ItemRouting = (id: number) => {
    router.push(`/content/${id}`);
  };
  const selectData = DummyData.find((x: any) => x.type === category);
  console.log(selectData, 'content');

  const dramaTag = ['최신', '인기 급상승', '역주행', '로맨스', '코미디', '액션', '스릴러', '범죄'];
  const movieTag = ['국내', '해외', '천만', '마블', '로맨스', '코미디', '액션', '스릴러', '범죄'];
  const varietyTag = ['장수', '유재석', '기안84', '관찰', '스튜디오', '로맨스', '코미디', '액션', '스릴러', '범죄'];

  const tag = category === 'drama' ? dramaTag : category === 'movie' ? movieTag : varietyTag;
  return (
    <CategoryStyle>
      {tag?.map((x: any, i: number) => {
        return <SwiperComponent key={i + 'tag'} data={selectData} tag={x} routing={ItemRouting} />;
      })}
    </CategoryStyle>
  );
};

export default CategoryPage;
