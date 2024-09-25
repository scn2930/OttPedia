import { Data } from '@/assets/data';
import { useRouter } from 'next/router';
import { ContentStyle } from './style';

const ContentPage = () => {
  const router = useRouter();
  const targetId = router.query.id;

  const target = Data.filter((x: any) => x.id === Number(targetId))[0];
  console.log(target);

  return (
    <ContentStyle>
      <div className="back">
        <div className="backColor"></div>
        <img className="backImg" src={target?.src?.src} alt="img" />
        <div className="info">
          <p className="title">{target?.title}</p>
          <p className="where">{target?.where}</p>
        </div>
        <div className="img">
          <img src={target?.src?.src} alt="img" />
        </div>
      </div>
      <div className="youtube">유투브 영상</div>
      <div className="youtube">유투브 영상</div>
      <div className="youtube">유투브 영상</div>
    </ContentStyle>
  );
};

export default ContentPage;
