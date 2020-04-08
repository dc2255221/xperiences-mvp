import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker.jsx';

const InfoBox = ({lat, lng, name}) => {
  // console.log('infor box created')
  // let googleMapLocation = "https://maps.google.com/?q=" + lat + ", " + lng
  // let windowGoogleMap = `window.location= + ${googleMapLocation}`
}

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      center: this.props.currentPosition,
      zoom: this.props.currentZoom,
      name: '',
      lat: '',
      lng: '',
      hover: false
    }
  }
  onChildMouseEnter(item){
    console.log('mouse entered')
    // this.setState({
    //     name: item.name,
    //     lat: item.latitude,
    //     lng: item.longitude,
    //     hover: true
    // })
  }

  onChildMouseLeave(item){
    console.log("mouse leave")
    // this.setState({
    //   name: '',
    //   lat: '',
    //   lng: '',
    //   hover: false
    // })
  }

  render() {

    const infoBox = this.state.hover === true ? <InfoBox lat={this.state.lat} lng={this.state.lng} name={this.state.name}/> : null

    return(
      <div className="split right map" style={{ height: '100vh', width: '50%', marginRight: '10px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAEWqiaBKhuv11kAVcYmdUa-BaDXKQ7Tm8',
            libraries: ['places', 'directions']
          }}
          defaultCenter={this.props.currentPosition}
          // center={this.setCenter}
          defaultZoom={this.props.currentZoom}
          // zoom={this.setZoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps).bind(this)}>
          {this.props.fetchedPlaces.map((item, i) =>
            <MapMarker
              name={item.name}
              lat={item.coordinates.latitude}
              lng={item.coordinates.longitude}
              onChildMouseEnter={() => this.onChildMouseEnter(item)}
              onChildMouseLeave={() => this.onChildMouseLeave(item)}
              key={i}/>
          )}
          {infoBox}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
