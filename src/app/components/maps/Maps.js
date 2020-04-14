import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Maps.scss'

function Map(props) {
  return (
    <GoogleMap
      defaultZoom={ 10 }
      defaultCenter={{ lat: -22.21966, lng: -49.97872, }}>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;