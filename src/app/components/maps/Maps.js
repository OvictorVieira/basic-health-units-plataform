import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Maps.scss'
import mapMarkerIcon from '../../../assets/images/map-marker-icon.svg'


const WrappedMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 15 }
    defaultCenter={{ lat: -22.21966, lng: -49.97872 }}
  >
    {
      props.institutes.map(institute => (

        <Marker
          key={ institute.id }
          position={{ lat: parseFloat(institute.geocode.lat), lng: parseFloat(institute.geocode.long) }}
          icon={{
            url: mapMarkerIcon,
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        >
          { institute.id }
        </Marker>

      ))
    }
  </GoogleMap>
))


export default WrappedMap;