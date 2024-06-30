'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
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
 * The function `createBooking` creates a new booking in a database with the provided booking data and form data after checking authentication.
 * @param bookingData - The `bookingData` parameter likely contains information about the booking, such as the cabin details, dates, and pricing. It seems to be used to create a new booking entry in the database.
 * @param formData - The `formData` parameter in the `createBooking` function is an instance of `FormData`, which is a built-in JavaScript object that allows you to easily construct a set of key/value pairs representing form fields and their values. It is used to collect additional information from the user, such as the number of guests and any special observations. This data is then combined with the booking data to create a new booking entry in the database.
 */
export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error('You must be signed in to create a booking');

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };

  const { error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) throw new Error('Booking could not be created');

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect('/cabins/thankyou');
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
 * The function `updateBooking` updates a booking based on the provided form data after performing authentication, authorization, data validation, mutation, error handling, revalidation, and redirection.
 * @param formData - The `formData` parameter in the `updateBooking` function contains form data submitted by a user for updating a booking. It is expected to be an instance of `FormData`, which is a built-in JavaScript object used to represent form data when working with HTML forms.
 */
export async function updateBooking(formData) {
  const bookingId = Number(formData.get('bookingId'));

  // AUTHENTICATION
  const session = await auth();
  if (!session)
    throw new Error('You must be signed in to delete your reservation');

  // AUTHORIZATION
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to update this booking');

  // BUILDING UPDATE DATA
  const updatedData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  // MUTATION
  const { error } = await supabase
    .from('bookings')
    .update(updatedData)
    .eq('id', bookingId)
    .select()
    .single();

  // ERROR HANDLING
  if (error) throw new Error('Booking could not be updated');

  // REVALIDATION
  revalidatePath(`/account/reservations/`);
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // REDIRECTING
  redirect('/account/reservations');
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
