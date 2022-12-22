import axios from "axios";
import {allPlacesApi} from "./constants";

export const getAllPlaces = () => {
            // return axios.get(allPlacesApi())
            return axios.get('http://localhost:9000/api/v1/places')
                .then(({data}) => data)
                .catch(err => console.log('%cFile: api.js, Function: err, Line 9 err: ', 'color: pink', err))
}

// export const getAllPlaces = () => {
//     return async () => {
//         console.log('%c inside', 'color: #ecb1f2; font-style:italic');
//         try {
//             const response = await axios.get(allPlacesApi());
//             return response.data;
//         } catch (err) {
//             console.log('%cFile: Recent.js, Function: error, Line 39 error: ', 'color: pink', err)
//             throw new Error('An error occurred while fetching all places');
//         }
//     }
// }