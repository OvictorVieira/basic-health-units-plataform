class ResponseFormatter {

  static request_success(response) {
    return {
      'success': true,
      'response': response
    }
  }

  static request_failed(message = 'Ops, Ocorreu algum erro, por favor tente novamente.') {
    return {
      'success': false,
      'message': message
    }
  }
}

export default ResponseFormatter;