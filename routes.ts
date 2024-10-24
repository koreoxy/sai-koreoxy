/**
 * An array of routes that are accsesible to the public
 * these routes do not require authentication
 * @types {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * these routes will redirect logged in in users to /settings
 * * @types {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * routes that start with this prefix are used for api authentication purposes
 * * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin
 * @types {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
