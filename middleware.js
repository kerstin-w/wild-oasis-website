import { auth } from '@/app/_lib/auth';

/** `export const middleware = auth;` is exporting the `auth` function from the `auth` module and
assigning it to the `middleware` constant. This allows other modules or files to import and use the
`auth` function as `middleware`. */
export const middleware = auth;

/** The `export const config = { matcher: ['/account'] };` statement is defining and exporting a constant named `config` that contains an object with a property `matcher` set to an array `['/account']`. This configuration object can be imported and used by other modules or files in the application. In this case, it specifies a configuration for matching routes, indicating that the
middleware should be applied to routes that match the path '/account'. */
export const config = {
  matcher: ['/account'],
};
