'use server';

import { signIn } from './auth';

/**
 * The `signInAction` function uses Google sign-in and redirects to the '/account' page upon successful sign-in.
 */
export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}
