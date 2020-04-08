import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import List from './List.jsx';
import MapContainer from './MapContainer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            currentPosition: {lat: 37.7823398281793, lng: -122.44315110}
        }
    }
    getSearchResults(searchItem) {
        console.log('searchItem', searchItem);
        axios.get(`/api/businesses`, {
            params: {
                query: searchItem.query,
                currentLocation: searchItem.currentLocation,
                sort_by: searchItem.sort_by
            }
        })
            .then((res) => {
                console.log(res.data.businesses);
                this.setState({
                    searchResults: res.data.businesses
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div id='app'>
                <div className="split left">
                    <Search handleSearch={this.getSearchResults.bind(this)}/>
                    <List searchResults={this.state.searchResults}/>
                </div>
                <MapContainer fetchedPlaces={this.state.searchResults}
                    currentPosition={this.state.currentPosition}
                    currentZoom={13}/>
            </div>
        )
    }
}

export default App;