const endPoint = '/api/v1/sign_in';

class Authenticator {

  constructor(communicatorBase) {

    this.communicatorBase = communicatorBase;
  }

  authenticate(email, password) {

    let body = this.mountBody(email, password);

    return this.signIn(body);
  }

  signIn(body) {
    return this.communicatorBase.post(endPoint, body);
  }

  mountBody(email, password) {

    return {
      "user": {
        email,
        password
      }
    };
  }
}

export default Authenticator;