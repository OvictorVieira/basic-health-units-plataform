import { post } from "../comunication";

export const authentication = (email, password) => {

  const endPoint = '/api/v1/sign_in';

  let body = _mountBody(email, password);

  return post(endPoint, body);
}

function _mountBody(email, password) {

  return {
    "user": {
      email,
      password
    }
  };
}
