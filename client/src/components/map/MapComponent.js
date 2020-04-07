import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { gApiKey } from '../../CONSTANTS';

const mapStyles = {
  height: '450px',
  width: '800px'
};

export class MapComponent extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
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
      <div className="container">
        <div>
          <h1>Var är din närmsta återvinningsstation?</h1>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 59.329323,
              lng: 18.068581
            }}
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
          </Map>
        </div>
        <div>
          <h1>Info: </h1>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: gApiKey
}))(MapComponent);
