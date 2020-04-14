import CommunicatorBase from "../comunication";

export const findInstitutes = (latitude, longitude) => {

  const endPoint = '/api/v1/find_ubs';

  let body = _mountBody(latitude, longitude);

  return CommunicatorBase.post(endPoint, body);
}

function _mountBody(email, password) {

  return {
    "user": {
      email,
      password
    }
  };
}