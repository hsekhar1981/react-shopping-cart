import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount(){
    //const url ="https://github.com/lewagon/flats-boilerplate/blob/master/flats.json";

    // fetch(url)
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data);
    //    this.setState({
    //    flats: data
    //    });
    // })

  }

  render() {
    const flat = {
      "name": "Trendy Apt in Buttes Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      "price": 200,
      "priceCurrency": "EUR",
      "lat": 48.885707,
      "lng": 2.343543
  };
  const flats = [flat, flat];

  const center = {
    lat:48.885707,
    lng:2.343543
  }

    return (
     <div className="app">
       <div className="main">
       <div className="search">
       </div>
       <div className="flats">
        { flats.map((flat) => {
          return <Flat flat={flat} />
        })}
       </div>
       </div>
       <div className="map">
        <GoogleMapReact 
         center={center}
         zoom={11}
         >
           { flats.map((flat) => {
          return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />
        })}
       </GoogleMapReact> 
       </div>
     </div>
    );
  }
}

export default App;
