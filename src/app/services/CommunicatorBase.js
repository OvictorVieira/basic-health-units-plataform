import api from '../services/Api'

import { request_success, request_failed } from "./utils/ResponseFormatter";

class CommunicatorBase {

  async post(endPoint, body, headers = {}) {

    try {
      let mountedHeader = this._mountHeaderBase(headers);

      const response = await api.post(endPoint, body, mountedHeader);

      return request_success(response.data);

    } catch (error) {

      if (error.response) {

        return request_failed(error.response.data['message']);

      } else {

        return request_failed();
      }
    }
  }

  _mountHeaderBase(headers) {

    return {
      headers: { ...headers, ...{ 'Content-Type': 'application/json' } }
    }
  }
}

export default CommunicatorBase;
