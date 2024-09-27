import SwiperComponent from '@/components/swiper';

interface Props {
  data: any;
  routing: any;
}
const MainBottomPage = ({ data, routing }: Props) => {
  const targets = data.filter((x: any) => x.type !== 'main');
  return (
    <>
      {targets?.map((x: any, i: number) => {
        return (
          <div key={i + 'swiper'}>
            <p>{x.type === 'drama' ? '드라마' : x.type === 'movie' ? '영화' : '예능'}</p>
            <SwiperComponent data={targets} type={x.type} routing={routing} />
          </div>
        );
      })}
    </>
  );
};

export default MainBottomPage;
