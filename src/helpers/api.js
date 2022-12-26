import axios from "axios";
import {allPlacesApi} from "./constants";

export const getAllPlaces = () => {
            // return axios.get(allPlacesApi())
            return axios.get('http://localhost:9000/api/v1/places')
                .then(({data}) => data)
                .catch(err => console.log('%cFile: api.js, Function: err, Line 9 err: ', 'color: pink', err))
}

export const getFavouritePlaces = () => {
    return axios.get('http://localhost:9000/api/v1/places/favourite')
        .then(({data}) => data)
        .catch(err => console.log('%cFile: api.js, Function: err, Line 14 err: ', 'color: pink', err))
}

export const getPlaceById = id => {
    return axios.get(`http://localhost:9000/api/v1/places/${id}`)
        .then(({data}) => data)
        .catch(err => console.log('%cFile: api.js, Function: err, Line 14 err: ', 'color: pink', err))
}