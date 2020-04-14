import Cookies from 'js-cookie'

const COOKIE_COMPANY_NAME = 'cookie_company_name';
const COOKIE_COMPANY_EMAIL = 'cookie_company_email';
const COOKIE_COMPANY_CNPJ = 'cookie_company_cnpj';
const COOKIE_COMPANY_TOKEN = 'cookie_company_token';

export const getConstantCompanyName = () => {
  return COOKIE_COMPANY_NAME;
};

export const getConstantCompanyEmail = () => {
  return COOKIE_COMPANY_EMAIL;
};

export const getConstantCompanyCnpj = () => {
  return COOKIE_COMPANY_CNPJ;
};

export const getConstantCompanyToken = () => {
  return COOKIE_COMPANY_TOKEN;
};

export const createCookie = (name, value) => {
  let oneDayFromNow = 1;

  const options = {
    path: '/',
    expires: oneDayFromNow
  };

  return Cookies.set(name, value, options);
};

export const deleteCookie = (name) => {
  Cookies.remove(name, { path: '/' })
};

export const retrieveCookie = (name) => {

  const savedCookie = Cookies.get(name);

  if (savedCookie) {
    return savedCookie;
  }

  return false;
};