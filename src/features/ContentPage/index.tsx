import { DummyData } from '@/assets/data';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ContentStyle } from './style';
import YouTube from '@/components/youtube';

const ContentPage = () => {
  const router = useRouter();
  const targetId = router.query.id;
  const [result, setResult] = useState<any>(null);
  useEffect(() => {
    if (targetId) {
      // flatMap: 배열을 평탄화 해서 새로운배열 생성(spread 느낌)
      // find: filter와 같은 기능인데 하나만 찾음 -> 데이터를 알면 find, 모르면 filter
      const item = DummyData.filter((x: any) => x.type !== 'main')
        .flatMap((x: any) => x.list)
        .find((x: any) => x.id === Number(targetId));

      setResult(item || null);
    }
  }, [targetId]); // targetId가 변경될 때마다 실행

  return (
    <ContentStyle>
      <div className="back">
        <div className="backColor"></div>
        {result && (
          <>
            <img className="backImg" src={result?.src?.src} alt="img" />
            <div className="info">
              <p className="title">{result?.title}</p>
              <p className="where">{result?.where}</p>
              <p className="runtime">{result?.runtime}</p>
              <p className="description">{result?.description}</p>
            </div>
            <div className="img">
              <img src={result.src?.src} alt="img" />
            </div>
          </>
        )}
      </div>
      <YouTube />
      <YouTube />
      <YouTube />
    </ContentStyle>
  );
};

export default ContentPage;
