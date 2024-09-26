import { DummyData } from '@/assets/data';
import { useRouter } from 'next/router';
import { ContentStyle } from './style';
import YouTube from '@/components/youtube';

const ContentPage = () => {
  const router = useRouter();
  const targetId = router.query.id;
  const target = DummyData.filter((x: any) => x.list.id === Number(targetId));
  console.log(DummyData, 'fdfdfdfdf');

  return (
    <ContentStyle>
      <div className="back">
        <div className="backColor"></div>
        <img className="backImg" src={target?.src} alt="img" />
        <div className="info">
          <p className="title">{target?.title}</p>
          <p className="where">{target?.where}</p>
          <p className="runtime">{target?.runtime}</p>
          <p className="description">{target?.description}</p>
        </div>
        <div className="img">
          <img src={target?.src?.src} alt="img" />
        </div>
      </div>
      <YouTube />
      <YouTube />
      <YouTube />
    </ContentStyle>
  );
};

export default ContentPage;
