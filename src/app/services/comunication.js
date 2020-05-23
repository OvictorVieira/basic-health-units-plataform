import api from './api'

import { request_success, request_failed } from "./utils/ResponseFormatter";

async function post(endPoint, body, headers = {}) {

  try {
    let mountedHeader = _mountHeaderBase(headers);

    console.log(`HOST da API: ${process.env.REACT_APP_API_HOST}`)

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

async function get(endPoint, headers = {}) {

  try {
    let mountedHeader = _mountHeaderBase(headers);

    const response = await api.get(endPoint, mountedHeader);

    return request_success(response.data);

  } catch (error) {

    if (error.response) {

      return request_failed(error.response.data['message']);

    } else {

      return request_failed();
    }
  }
}

function _mountHeaderBase(headers) {

  return {
    headers: { ...headers, ...{ 'Content-Type': 'application/json' } }
  }
}

export { post, get };