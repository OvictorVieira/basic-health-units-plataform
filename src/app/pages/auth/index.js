import React, { Component } from 'react';

import { authentication } from "../../services/requests/authentication";
import { createSuccessNotification, createDangerNotification } from '../../components/notifications/notifications';
import { encrypt } from "../../components/encrypt/encrypt";

import logo from "../../../assets/images/healthcare-and-medical.png";
import {
  createCookie,
  getConstantCompanyName,
  getConstantCompanyEmail,
  getConstantCompanyCnpj,
  getConstantCompanyToken
} from "../../components/cookies/cookies";

class Auth extends Component {

  constructor(props) {

    super(props);

    this.state = {
      name: '',
      email: '',
      cnpj: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.treatSuccess = this.treatSuccess.bind(this);
    this.treatFailure = this.treatFailure.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveCookies = this.saveCookies.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();

    authentication(this.state.email, this.state.password)
      .then(authentication => {

      this.handleAuthentication(authentication);
    });
  }

  handleAuthentication(authentication) {

    if(authentication['success'] && authentication['response'] !== undefined) {

      this.treatSuccess(authentication['response'])

    } else {

      this.treatFailure(authentication)
    }
  }

  treatSuccess(authentication) {

    const { name, email, cnpj, authentication_token } = authentication;

    this.setState({
      name,
      email,
      cnpj
    });

    this.saveCookies(authentication_token);

    this.props.history.push('/institutes');

    createSuccessNotification(authentication['message'])
  }

  saveCookies(authentication_token) {

    createCookie(getConstantCompanyName(), encrypt(this.state.name));
    createCookie(getConstantCompanyEmail(), encrypt(this.state.email));
    createCookie(getConstantCompanyCnpj(), encrypt(this.state.cnpj));
    createCookie(getConstantCompanyToken(), encrypt(authentication_token));
  }

  treatFailure(authentication) {

    this.props.history.push('/');

    createDangerNotification(authentication['message'])
  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (

      <>

        <div className='row'>

          <div className='col-sm-9 col-md-7 col-lg-4 mx-auto'>

            <div className='card card-signin my-5'>

              <div className='card-body'>

                <div className='d-flex flex-row justify-content-center'>

                  <img src={ logo } className='w-50 card-img-top' alt='Bionexo'/>

                </div>

                <h5 className='text-center pb-5'>Preencha o(s) campo(s) para entrar.</h5>

                <form className='form-signin' onSubmit={ this.handleSubmit }>

                  <div className='form-group d-flex justify-content-center py-1'>

                    <input type='email'
                           id='email'
                           name='email'
                           className='form-control w-75'
                           placeholder='E-mail'
                           required
                           autoFocus
                           onChange={ this.handleChange }
                    />

                  </div>

                  <div className='form-group d-flex justify-content-center py-1'>

                    <input type='password'
                           id='password'
                           name='password'
                           className='form-control w-75'
                           placeholder='Digite sua senha'
                           required
                           onChange={ this.handleChange }
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