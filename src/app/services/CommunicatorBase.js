import api from '../services/Api'

import ResponseFormatter from "./utils/ResponseFormatter";

class CommunicatorBase {

  async post(endPoint, body, headers = {}) {

    try {
      let mountedHeader = this._mountHeaderBase(headers);

      const response = await api.post(endPoint, body, mountedHeader);

      return ResponseFormatter.request_success(response.data);

    } catch (error) {

      if (error.response) {

        return ResponseFormatter.request_failed(error.response.data['message']);

      } else {

        return ResponseFormatter.request_failed();
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
