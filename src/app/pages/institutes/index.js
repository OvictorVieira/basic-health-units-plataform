import React, { Component } from "react";
import WrappedMap from '../utils/maps/Maps'

class Institutes extends Component{

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className='google-map'>
        <WrappedMap

          // googleMapURL={`${ process.env.GOOGLE_MAP_URL.concat(process.env.GOOGLE_API_KEY) }`}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZXliOE3XjpGoGmFP9mujhlcX7vtRD118`}

          loadingElement={ <div className='h-100' /> }

          containerElement={ <div className='h-100' /> }

          mapElement={ <div className='h-100' /> }
        />
      </div>
    );
  }
}

export default Institutes;