import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>
        <span className="capitalize">The wild oasis. </span>Welcome to paradise.
      </h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
