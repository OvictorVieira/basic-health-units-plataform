import { get } from "../comunication";
import {getConstantCompanyEmail, getConstantCompanyToken, retrieveCookie} from "../../components/cookies/cookies";
import { decrypt } from "../../components/encrypt/encrypt";

const getInstitutesByLocation = (latitude, longitude) => {

  const endPoint = `/api/v1/find_ubs?query=${latitude},${longitude}`;

  let header = _mountHeaders;

  return get(endPoint, header);
}

function _mountHeaders() {

  return {
    "user": {
      email: decrypt(retrieveCookie(getConstantCompanyEmail())),
      authentication_token: decrypt(retrieveCookie(getConstantCompanyToken()))
    }
  };
}

export { getInstitutesByLocation }