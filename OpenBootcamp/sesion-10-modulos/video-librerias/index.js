import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/gorka')
    .then(function (response) {
        // handle success
        console.log("Success!!!")
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!!")
        console.log(error);
    })
    .finally(function () {
        // always executed
    });