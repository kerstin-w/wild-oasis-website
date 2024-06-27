'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';

/**
 * The function `updateGuest` updates a guest's profile information in a database after verifying the user's authentication status and input data validity.
 * @param formData - The `formData` parameter in the `updateGuest` function likely contains form data submitted by a guest to update their profile. It includes the guest's national ID, nationality, and country flag information. The function extracts the relevant data from the form data and performs validation checks before updating the guest
 */
export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be signed in to update your profile');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('National ID must be 6-12 characters long');
  }

  const updatedData = {
    nationality,
    nationalID,
    countryFlag,
  };

  const { data, error } = await supabase
    .from('guests')
    .update(updatedData)
    .eq('id', session.user.guestId);

  if (error) {
    throw new Error('Guest could not be updated');
  }

  revalidatePath('/account/profile');
}

/**
 * The function `deleteReservation` deletes a booking based on the provided bookingId after checking user authentication and permission.
 * @param bookingId - The `bookingId` parameter in the `deleteReservation` function is the unique identifier of the reservation/booking that you want to delete. This ID is used to identify the  specific booking record in the database and ensure that only the authorized user can delete their own reservation.
 */
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session)
    throw new Error('You must be signed in to delete your reservation');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to delete this booking');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) {
    throw new Error('Booking could not be deleted');
  }
  revalidatePath('/account/reservations');
}

/**
 * The `signInAction` function uses Google sign-in and redirects to the '/account' page upon successful sign-in.
 */
export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

/**
 * The `signOutAction` function signs the user out and redirects to the home page.
 */
export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
