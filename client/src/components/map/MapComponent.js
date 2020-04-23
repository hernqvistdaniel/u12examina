import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { gApiKey } from '../../CONSTANTS';
import recyclePicture from '../../img/recyclepic.jpeg';

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
              className="map"
              centerAroundCurrentLocation
              google={this.props.google}
              infowindow={this.props.showingInfoWindow}
              callbackFromParent={this.myCallback}
            >
              <Marker onClick={this.onMarkerClick} name={'Här är du!'} />
            </CurrentLocation>
          </div>
          {place.name ? (
            <div className="mapRightBox">
              <div className="mapText">
                <h1>Info: </h1>
                {place.name && (
                  <p>
                    <b>{place.name}</b>
                  </p>
                )}
                {place.formatted_address && <p>{place.formatted_address}</p>}
                {place.distance && (
                  <p>
                    <i>{place.distance}m bort</i>
                  </p>
                )}
                {place.time && (
                  <p>
                    <i>ca: {place.time} minuters promenad</i>
                  </p>
                )}
                {place.formatted_address && (
                  <div>
                    <p>
                      Ifall du behöver rapportera ett problem med en station kan
                      du göra det på FTI:s hemsida:
                    </p>
                    <a
                      href="https://webapp.ftiab.se/Forms/LeaveOpinion.aspx"
                      target="_blank"
                    >
                      <button>Klicka här!</button>
                    </a>
                  </div>
                )}
              </div>
              <img src={recyclePicture} className="recycleImage" />
            </div>
          ) : (
            <div className="mapRightBox">
              <div className="mapText">
                <h1>
                  Här är dina närmaste stationer, klicka på en för att få mer
                  information!
                </h1>
              </div>
              <img src={recyclePicture} className="recycleImage" />
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
