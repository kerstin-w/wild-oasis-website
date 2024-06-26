import Link from 'next/link';
import { auth } from '../_lib/auth';

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link href="/account" className="flex items-center gap-4">
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="hover:text-accent-400 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Guest area
              </span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
