import React, { Component } from "react";
import {
  getConstantCompanyCnpj, getConstantCompanyName,
  retrieveCookie } from "../../components/cookies/cookies";

import Navbar from '../../components/navbar/Navbar';
import Cards from "./components/cards";
import WrappedMap from '../../components/maps/Maps'

import { decrypt } from "../../components/encrypt/encrypt";
import { getInstitutesByLocation } from "../../services/requests/institutes";
import { createDangerNotification, createWarningNotification } from "../../components/notifications/notifications";
import SearchBox from "./components/searchBox";
import './components/searchBox.scss'

class Institutes extends Component{

  constructor(props) {
    super(props);

    this.state = {
      name: decrypt(retrieveCookie(getConstantCompanyName())),
      cnpj: decrypt(retrieveCookie(getConstantCompanyCnpj())),
      institutes: [],
      showSearchBox: false
    }

    this.showSearchBox = this.showSearchBox.bind(this)
  }

  componentDidMount() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {

        getInstitutesByLocation(position.coords.latitude, position.coords.longitude)
          .then(response => {

            this.handleResponse(response);
          })

      });
    } else {
      createWarningNotification('Use o campo de busca passando a sua localização...');
    }
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
      institutes: response['entries']
    });
  }

  treatFailure(response) {

    createDangerNotification(response['message'])
  }

  showSearchBox() {

    this.setState({
      showSearchBox: !this.state.showSearchBox,
    })
  }

  render() {

    return (
      <div className='google-map'>

        <Navbar companyName={ this.state.name }
                companyCnpj={ this.state.cnpj }
                showSearchBox={ this.state.showSearchBox }
        />

        <div id='container-items' className='d-flex flex-column container-items'>
          <SearchBox />

          { this.state.institutes && <Cards institutes={ this.state.institutes }/> }
        </div>

        <WrappedMap

          googleMapURL={`${ process.env.APP_GOOGLE_MAP_URL.concat(process.env.APP_GOOGLE_API_KEY) }`}

          loadingElement={ <div style={{ height: '100vh' }} /> }

          containerElement={ <div style={{ height: '100vh' }} /> }

          mapElement={ <div style={{ height: '100vh' }} /> }

          institutes={ this.state.institutes }
        />
      </div>
    );
  }
}

export default Institutes;