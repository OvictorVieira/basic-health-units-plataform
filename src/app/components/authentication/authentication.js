import {
  getConstantCompanyCnpj, getConstantCompanyEmail,
  getConstantCompanyName,
  getConstantCompanyToken,
  retrieveCookie
} from "../cookies/cookies";

import { createDangerNotification } from "../notifications/notifications";


export const isAuthenticated = () => {

  let token = retrieveCookie(getConstantCompanyToken());
  let cnpj = retrieveCookie(getConstantCompanyCnpj());
  let name = retrieveCookie(getConstantCompanyName());
  let email = retrieveCookie(getConstantCompanyEmail());

  return token && cnpj && name && email;
};