import { useRouter } from 'next/router';
import { HeaderStyle } from './style';

const Header = () => {
  const router = useRouter();
  const PageRouting = (type: string) => {
    if (type === 'home') {
      router.push('/');
    } else if (type === 'drama') {
      router.push('/category/drama');
    } else if (type === 'movie') {
      router.push('/category/movie');
    } else if (type === 'variety') {
      router.push('/category/variety');
    } else if (type === 'signup') {
      router.push('/signup');
    } else if (type === 'login') {
      router.push('/login');
    }
  };

  return (
    <HeaderStyle>
      <div className="nav">
        <div className="left">
          <div
            onClick={() => {
              PageRouting('home');
            }}
          >
            OttPedia
          </div>
        </div>
        <div className="right">
          <li
            onClick={() => {
              PageRouting('drama');
            }}
          >
            드라마
          </li>
          <li
            onClick={() => {
              PageRouting('movie');
            }}
          >
            영화
          </li>
          <li
            onClick={() => {
              PageRouting('variety');
            }}
          >
            예능
          </li>
          <li
            onClick={() => {
              PageRouting('signup');
            }}
          >
            회원가입
          </li>
          <li
            onClick={() => {
              PageRouting('login');
            }}
          >
            로그인
          </li>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
