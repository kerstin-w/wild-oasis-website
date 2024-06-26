'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/**
 * The `Filter` function handles filtering cabins based on capacity using URL parameters and buttons.
 * @returns The Filter component is returning a div element with a border and flex styling. Inside the div, there are four Button components rendered with different filter values ("all", "small", "medium", "large"), handleFilter function passed as a prop, and activeFilter value to determine the active filter. Each Button component displays a different range of guests for cabin capacity.
 */
function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash; 3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash; 7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash; 12 guests
      </Button>
    </div>
  );
}

/**
 * The Button function takes in props such as filter, handleFilter, activeFilter, and children to render a button with conditional styling based on the active filter.
 * @returns The `Button` component is being returned. It is a button element with dynamic styling based on the `filter` prop, `activeFilter` prop, and a click event handler `handleFilter`. The button's text content is determined by the `children` prop.
 */
function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
