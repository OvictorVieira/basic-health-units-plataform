export const request_success = (response) => {
  return {
    'success': true,
    'response': response
  }
};

export const request_failed = (message = 'Ops, Ocorreu algum erro, por favor tente novamente.') => {
  return {
    'success': false,
    'message': message
  }
};