import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const turf = require('@turf/turf');

const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%',
  },
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat,
        lng,
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          const map = this.map;
          const google = this.props.google;
          const infowindow = InfoWindow;

          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude,
            },
          });
          var service = new google.maps.places.PlacesService(map);
          service.textSearch(
            {
              query: [
                'FTI Station',
                'Återvinningsstation',
                'Återvinning',
                'Återvinningscentral',
              ],
              location: this.state.currentLocation,
              radius: 500,
            },
            callback
          );
          function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
              }
            }
          }

          function createMarker(place) {
            var current = coords;
            var placeLoc = place.geometry.location;

            const lat = placeLoc.lat();
            const lng = placeLoc.lng();
            var fromPlace = turf.point([current.latitude, current.longitude]);
            var toPlace = turf.point([lat, lng]);
            var options = { units: 'meters' };

            var rawDistance = turf.distance(fromPlace, toPlace, options);
            var distance = Math.trunc(rawDistance);
            var time = Math.trunc((distance / 100) * 1.2);

            place.distance = distance;
            place.time = time;

            if (distance < 2500) {
              var marker = new google.maps.Marker({
                map: map,
                position: placeLoc,
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                  labelOrigin: {
                    x: 12,
                    y: -10,
                  },
                },
                label: {
                  text: place.name,
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 'bold',
                },
              });

              google.maps.event.addListener(marker, 'click', function () {
                const infowindow = new google.maps.InfoWindow();
                infowindow.setContent(
                  `<h1>${place.name}</h1>
                  <p><b>${place.formatted_address}</b</p>
                  <br />
                  <p><i>${place.distance}m ifrån dig</i><p>
                  <br />
                  <p><i>ca: ${place.time} min</i></p>
                  <p>
                  <img style="color: blue;width: 50px; height: 50px;"src="${place.icon}" />`
                );
                infowindow.open(map, this);
              });
            }
          }
        });
      }
    }
    this.loadMap();
  }
  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center,
          zoom,
        }
      );

      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, (c) => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation,
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 18,
    lng: 59,
  },
  centerAroundCurrentLocation: true,
  visible: true,
};
