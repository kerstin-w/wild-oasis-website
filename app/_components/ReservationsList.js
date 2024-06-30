'use client';

import { useOptimistic } from 'react';
import { deleteReservation } from '../_lib/actions';
import ReservationCard from './ReservationCard';

/**
 * The `ReservationsList` function manages a list of bookings, allowing optimistic deletion of bookings with asynchronous confirmation.
 * @returns The `ReservationsList` component is returning a list of `ReservationCard` components, each representing a booking from the `optimisticBookings` array. Each `ReservationCard` component displays information about a booking and provides a way to delete the booking by calling the `handleDelete` function when the delete action is triggered.
 */
function ReservationsList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  /**
   * The function `handleDelete` optimistically deletes a booking and then deletes the reservation asynchronously.
   * @param bookingId - The `bookingId` parameter is the unique identifier of the booking or reservation that needs to be deleted.
   */
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationsList;
