export const isAuthenticated = () => {

  return localStorage.getItem('token') && localStorage.getItem('token') !== undefined;
};