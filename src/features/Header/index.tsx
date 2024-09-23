import { useRouter } from 'next/router';
import { HeaderStyle } from './style';

const Header = () => {
  const router = useRouter();
  const routingPage = (type: string) => {
    if (type === 'home') {
      router.push('/');
    } else if (type === 'drama') {
      router.push('/drama');
    } else if (type === 'movie') {
      router.push('/movie');
    } else if (type === 'variety') {
      router.push('/variety');
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
              routingPage('home');
            }}
          >
            OttPedia
          </div>
        </div>
        <div className="right">
          <li
            onClick={() => {
              routingPage('drama');
            }}
          >
            드라마
          </li>
          <li
            onClick={() => {
              routingPage('movie');
            }}
          >
            영화
          </li>
          <li
            onClick={() => {
              routingPage('variety');
            }}
          >
            예능
          </li>
          <li
            onClick={() => {
              routingPage('signup');
            }}
          >
            회원가입
          </li>
          <li
            onClick={() => {
              routingPage('login');
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
