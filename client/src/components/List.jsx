import React from 'react';
import axios from 'axios';

const List = ({searchResults}) => (
    <div className="list">
        {searchResults.map((item, i) => <Item item={item} key={i}/>)}
    </div>
)

const Item = ({item}) => {
    const {name, image_url, location, display_phone, distance, rating} = item;
    return (
    <div className="entry">
        <h3>{name}</h3>
        <img src={image_url} alt="photo" width="150px" height="150px"></img><br/>
        <span>{location.display_address.join(' ')}</span><br/>
        <span>{display_phone}</span><br/>
        <span> Distance: {distance}</span><br/>
        <span> Rating: {rating} </span>
    </div>
    )
}

export default List;
