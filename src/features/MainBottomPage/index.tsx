import SwiperComponent from '@/components/swiper';

interface Props {
  data: any;
  // type: string
  routing: any;
}
const MainBottomPage = ({ data, routing }: Props) => {
  return (
    <>
      <p></p>
      <SwiperComponent data={data} keyValue="main" type={'drama'} routing={routing} />
    </>
  );
};

export default MainBottomPage;
