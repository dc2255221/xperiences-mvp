const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 5000;
const axios = require('axios');
const YELP_API_KEY = require('../yelp.configs.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/public'));

app.get('/api/businesses', (req, res) => {
    const {query, currentLocation, sort_by} = req.query;
    axios.get(`https://api.yelp.com/v3/businesses/search`, {
        headers: { Authorization: `Bearer ${YELP_API_KEY}`},
        params: {
            term: query,
            location: currentLocation,
            radius: 40000,
            categories: query,
            locale: 'en_US',
            limit: 10,
            sort_by: sort_by,
            price: '1, 2, 3, 4',
            open_now: true,
            attributes: 'open_to_all'
        }
    })
    .then(({data}) => {
        res.send(data);
        // console.log(data);
    })
    .catch((err) => {
        res.status(500).send(err);
        // console.log(err);
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});