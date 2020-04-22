import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { gApiKey } from '../../CONSTANTS';

import CurrentLocation from './CurrentLocation';

export class MapComponent extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      listDataFromChild: null,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  myCallback = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      selectedPlace: dataFromChild,
    });
  };

  render() {
    const place = this.state.selectedPlace;
    return (
      <div className="containPageSize">
        <div className="headline">
          <h1>Var är din närmsta återvinningsstation?</h1>
          <p>
            <i>
              Se var din närmsta station är och hur lång tid det tar att ta sig
              dit, du kan även se vad man kan slänga där.
            </i>
          </p>
        </div>
        <div className="mapContainer">
          <div className="map">
            <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
              infowindow={this.props.showingInfoWindow}
              callbackFromParent={this.myCallback}
            >
              <Marker onClick={this.onMarkerClick} name={'You are here!'} />
            </CurrentLocation>
          </div>
          {place.name ? (
            <div className="mapText">
              <h1>Info: </h1>
              <p>{place.name}</p>
              <p>{place.formatted_address}</p>
              <p>{place.distance}</p>
              <p>{place.time}</p>
            </div>
          ) : (
            <div className="mapText">
              <h1>Click on a marker to display info on that station! </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: gApiKey,
}))(MapComponent);
