'use client';
import ReservationCard from './ReservationCard';

function ReservationsList({ bookings }) {
  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} />
      ))}
    </ul>
  );
}

export default ReservationsList;
