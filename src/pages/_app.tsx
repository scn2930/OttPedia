import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Header from '@/features/Header/index';
import 'swiper/css';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
