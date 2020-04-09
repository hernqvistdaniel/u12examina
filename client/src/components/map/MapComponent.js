import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { gApiKey } from '../../CONSTANTS';

import CurrentLocation from './CurrentLocation';

const mapStyles = {
  height: '50%',
  width: '50%'
};

export class MapComponent extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
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
              infowindow={this.state.showingInfoWindow}
            >
              <Marker onClick={this.onMarkerClick} name={'You are here!   '} />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h3>{this.state.selectedPlace.name}</h3>
                </div>
              </InfoWindow>
            </CurrentLocation>
          </div>
          <div className="mapText">
            <h1>Info: </h1>
            <p>Info number 1</p>
            <p>Info number 2</p>
            <p>Info number 3</p>
            <p>Info number 4</p>
            <p>Info number 5</p>
            <p>Info number 6</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: gApiKey
}))(MapComponent);
