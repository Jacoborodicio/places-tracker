import axios from "axios";
import {baseApiUrl} from "./constants";
// import {allPlacesApi} from "./constants";
// // const baseApiUrl = 'https://jacoborodicio.com:9000/api/v1/';
// const baseApiUrl = 'http://localhost:9000/api/v1/';
export const getAllPlaces = () => {
            // return axios.get(allPlacesApi())
            return axios.get(`${baseApiUrl}/places`)
                .then(({data}) => data)
                .catch(err => console.log('%cFile: api.js, Function: err, Line 9 err: ', 'color: pink', err))
}

export const getFavouritePlaces = () => {
    return axios.get(`${baseApiUrl}/places/favourite`)
        .then(({data}) => data)
        .catch(err => console.log('%cFile: api.js, Function: err, Line 14 err: ', 'color: pink', err))
}

export const getPlaceById = id => {
    return axios.get(`${baseApiUrl}/places/${id}`)
        .then(({data}) => data)
        .catch(err => console.log('%cFile: api.js, Function: err, Line 14 err: ', 'color: pink', err))
}