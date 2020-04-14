import React, { Component } from "react";
import Navbar from '../../components/navbar/Navbar';
import WrappedMap from '../../components/maps/Maps'

class Institutes extends Component{

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className='google-map'>

        <Navbar />

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