import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';
import Header from './_components/Header';

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabins in the heart of the Italian Dolomites, surrounded by beatiful mountains.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
