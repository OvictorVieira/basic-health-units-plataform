import React, { Component } from "react";
import {
  getConstantCompanyCnpj,
  getConstantCompanyName,
  retrieveCookie
} from "../../components/cookies/cookies";

import {
  createDangerNotification,
  createWarningNotification
} from "../../components/notifications/notifications";
import ContainerCards from "../../components/card_container/containerCards";

import Navbar from '../../components/navbar/Navbar';
import { decrypt } from "../../components/encrypt/encrypt";

import WrappedMap from '../../components/maps/Maps'
import { getInstitutesByLocation } from "../../services/requests/institutes";

class Institutes extends Component{

  constructor(props) {
    super(props);

    this.state = {
      name: decrypt(retrieveCookie(getConstantCompanyName())),
      cnpj: decrypt(retrieveCookie(getConstantCompanyCnpj())),
      institutes: [],
      showSearchBox: true
    }

    this.showSearchBox = this.showSearchBox.bind(this)
  }

  componentDidMount() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {

        this.getInstitutesByLocation(position.coords.latitude, position.coords.longitude)

      });
    } else {

      createWarningNotification('Use o campo de busca passando a Longitude e Latitude...');
    }
  }

  getInstitutesByLocation(latitude, longitude) {

    getInstitutesByLocation(latitude, longitude)
      .then(response => {

        this.handleResponse(response)
      })
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

  showSearchBox = () => {

    this.setState({
      showSearchBox: !this.state.showSearchBox,
    })
  }

  render() {

    return (
      <div className='google-map'>

        <Navbar companyName={ this.state.name }
                companyCnpj={ this.state.cnpj }
                showSearchBox={ this.showSearchBox }
        />

        { this.state.showSearchBox &&

          <ContainerCards showSearchBox={ this.showSearchBox }
                          institutes={ this.state.institutes }
                          getInstitutesByLocation={ this.getInstitutesByLocation }/>
        }

        <WrappedMap

          googleMapURL={`${ process.env.REACT_APP_GOOGLE_MAP_URL.concat(process.env.REACT_APP_GOOGLE_API_KEY) }`}

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