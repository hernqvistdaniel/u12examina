import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%'
  }
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat,
        lng
      }
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
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          const map = this.map;
          const google = this.props.google;
          const infowindow = this.props.infoWindow;

          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
          var service = new google.maps.places.PlacesService(map);
          service.textSearch(
            {
              query: [
                'FTI Station',
                'Återvinningsstation',
                'Återvinning',
                'Återvinningscentral',
                'Recycling Station',
                'Recycling'
              ],
              location: this.state.currentLocation,
              radius: 1500
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
            console.log(place);
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
              console.log(place.name);
              // infowindow.setContent(place.name);
              // infowindow.open(map, this);
            });
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
          zoom
        }
      );

      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
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
    lat: 59.329323,
    lng: 18.068581
  },
  centerAroundCurrentLocation: false,
  visible: true
};
