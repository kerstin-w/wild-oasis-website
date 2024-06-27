'use server';

import { signIn, signOut } from './auth';

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
