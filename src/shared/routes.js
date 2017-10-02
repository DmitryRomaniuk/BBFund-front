// @flow

export const HOME_PAGE_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const PROTECTED_ROUTE = '/protected';
export const ADMIN_ROUTE = '/admin';
export const HOME_PAGE_LIST_ROUTE = '/home-list';
export const HOME_PAGE_GET_ROUTES_LIST_ROUTE = '/home-routes';
export const HELLO_PAGE_ROUTE = '/hello';
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;
