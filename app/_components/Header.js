import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import Banner from './Banner';

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
      <Banner />
    </header>
  );
}

export default Header;
