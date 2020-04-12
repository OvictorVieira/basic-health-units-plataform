import React, { Component } from 'react';
import Messages from "../utils/Messages";

import Authenticator from "../../services/authentication/Authenticator";
import CommunicatorBase from "../../services/CommunicatorBase";

import logo from "../../../assets/images/logo-bionexo-green-pool.png";

class Auth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cnpj: '',
      password: '',
      message: '',
      typeMessage: ''
    }
  }

  handleSubmit(event) {

    event.preventDefault();

    const communicatorBase = new CommunicatorBase();

    const authenticator = new Authenticator(communicatorBase);

    authenticator
      .authenticate(this.state.email, this.state.password)
      .then(authentication => {

      this.handleAuthentication(authentication);
    });
  }

  handleAuthentication(authentication) {

    if(authentication['success']) {

      this.treatSuccess(authentication)

    } else {

      this.treatFailure(authentication)
    }
  }

  treatSuccess(authentication) {
    const { name, email, cnpj, authentication_token } = authentication;

    this.setState({ name: name });
    this.setState({ email: email });
    this.setState( { cnpj: cnpj });

    localStorage.setItem('token', authentication_token);

    this.props.history.push('/dashboard');
  }

  treatFailure(authentication) {
    this.props.history.push('/');

    this.setState({ message: authentication['message'] });
    this.setState( { typeMessage: 'danger' });
  }

  render() {

    return (

      <>

        { this.state.message && <Messages type={ this.state.typeMessage } message={ this.state.message } /> }

        <div className='row'>

          <div className='col-sm-9 col-md-7 col-lg-4 mx-auto'>

            <div className='card card-signin my-5'>

              <div className='card-body'>

                <div className='d-flex flex-row justify-content-center py-5'>

                  <img src={ logo } className='w-50 card-img-top' alt='Bionexo'/>

                </div>

                <h5 className='text-center pb-5'>Preencha o(s) campo(s) para entrar.</h5>

                <form className='form-signin' onSubmit={ this.handleSubmit }>

                  <div className='form-group d-flex justify-content-center py-1'>

                    <input type='email'
                           id='inputEmail'
                           className='form-control w-75'
                           placeholder='E-mail'
                           required
                           autoFocus
                           onChange={ event => this.setState({ email: event.target.value }) }
                    />

                  </div>

                  <div className='form-group d-flex justify-content-center py-1'>

                    <input type='password'
                           id='inputPassword'
                           className='form-control w-75'
                           placeholder='Senha'
                           required
                           onChange={ event => this.setState({ password: event.target.value }) }
                    />

                  </div>

                  <div className='d-flex flex-row justify-content-around pt-4 pb-2'>

                    <button className='btn btn-lg btn-primary btn-block text-uppercase w-50' type='submit'>
                      Entrar
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </>
    );
  }
}

export default Auth;