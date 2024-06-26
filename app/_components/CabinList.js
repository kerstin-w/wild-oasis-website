import { unstable_noStore as noStore } from 'next/cache';

import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';

/**
 * The `CabinList` function filters and displays cabins based on the specified criteria.
 * @param {Object} props - The component props.
 * @param {string} props.filter - The filter option for cabins.
 * @returns The `CabinList` function returns a JSX element that contains a grid layout of CabinCard components based on the filter option provided. The `displayedCabins` variable is assigned an array of cabins based on the filter option, and then each cabin in the `displayedCabins` array is mapped to a CabinCard component with the corresponding cabin data.
 */
async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length) {
    return null;
  }

  /* This is creating an object where each property corresponds to a different filter option for cabins. The `displayedCabins` constant is then assigned the value of the property that matches the `filter` parameter passed to the `CabinList` function. */
  const displayedCabins = {
    all: cabins,
    small: cabins.filter((cabin) => cabin.maxCapacity <= 3),
    medium: cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    ),
    large: cabins.filter((cabin) => cabin.maxCapacity >= 8),
  }[filter];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
