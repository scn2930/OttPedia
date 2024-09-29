import SwiperComponent from '@/components/swiper';
import { MainBottomStyle } from './style';

interface Props {
  data: any;
  routing: any;
}
const MainBottomPage = ({ data, routing }: Props) => {
  const targets = data.filter((x: any) => x.type !== 'main');
  return (
    <MainBottomStyle>
      {targets?.map((x: any, i: number) => {
        return (
          <div className="wrap" key={i + 'swiper'}>
            <div className="text">
              <p className="tag">{x.type === 'drama' ? '드라마' : x.type === 'movie' ? '영화' : '예능'}</p>
              <p className="more">더보기</p>
            </div>
            <SwiperComponent data={targets} type={x.type} routing={routing} />
          </div>
        );
      })}
    </MainBottomStyle>
  );
};

export default MainBottomPage;
