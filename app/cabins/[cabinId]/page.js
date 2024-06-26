import { Suspense } from 'react';
import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { getCabin, getCabins } from '@/app/_lib/data-service';

/**
 * The function generateMetadata retrieves the name of a cabin using its ID and generates metadata with
 * the cabin's name for title and description.
 * @returns {
 *     title: `Cabin NAME`,
 *     description: `Details and reservation for Cabin NAME`,
 * }
 */
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
    description: `Details and reservation for Cabin ${name}`,
  };
}

/**
 * The function generates static parameters by fetching cabin data and mapping it to an array of
 * objects containing cabin IDs as strings.
 * @returns An array of objects containing the cabinId property as strings.
 */
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve Cabin {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
