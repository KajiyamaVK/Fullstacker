import '@/styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Topbar from '@/components/Topbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Topbar />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
}