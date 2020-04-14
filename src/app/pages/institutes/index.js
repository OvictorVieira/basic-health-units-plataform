import React, { Component } from "react";
import {
  getConstantCompanyCnpj, getConstantCompanyEmail, getConstantCompanyName,
  getConstantCompanyToken, retrieveCookie } from "../../components/cookies/cookies";

import Navbar from '../../components/navbar/Navbar';

import WrappedMap from '../../components/maps/Maps'

import { decrypt } from "../../components/encrypt/encrypt";
import { getInstitutesByLocation } from "../../services/requests/institutes";
import { createDangerNotification } from "../../components/notifications/notifications";

class Institutes extends Component{

  constructor(props) {
    super(props);

    this.state = {
      name: decrypt(retrieveCookie(getConstantCompanyName())),
      cnpj: decrypt(retrieveCookie(getConstantCompanyCnpj())),
      geolocation: {
        latitude: -22.21966, // buscar do navegador
        longitude: -49.97872 // buscar do navegador
      },
      institutes: {}
    }
  }

  componentDidMount() {

    getInstitutesByLocation(
      this.state.geolocation.latitude,
      this.state.geolocation.longitude)
      .then(response => {

        this.handleResponse(response);
      });
  }

  handleResponse(response) {

    if(response['success'] && response['response'] !== undefined) {

      this.treatSuccess(response['response'])

    } else {

      this.treatFailure(response)
    }
  }

  treatSuccess(response) {
    this.setState({

      institutes: response['response']['entries']
    });
  }

  treatFailure(response) {

    createDangerNotification(response['message'])
  }

  render() {

    return (
      <div className='google-map'>

        <Navbar companyName={ this.state.name } companyCnpj={ this.state.cnpj }/>

        <WrappedMap

          googleMapURL={`${ process.env.REACT_APP_GOOGLE_MAP_URL.concat(process.env.REACT_APP_GOOGLE_API_KEY) }`}

          loadingElement={ <div className='h-100' /> }

          containerElement={ <div className='h-100' /> }

          mapElement={ <div className='h-100' /> }
        />
      </div>
    );
  }
}

export default Institutes;