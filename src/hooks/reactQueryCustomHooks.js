import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

export const setLocationPath = path => window.location.href = path;

const handleDeletePlace = id => axios.delete(`http://localhost:9000/api/v1/places/${id}`);
const handleAddPlace = placeFormData => axios.post('http://localhost:9000/api/v1/places', placeFormData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

export const useDeletePlace = () => {
    const queryClient = useQueryClient();
    return useMutation(handleDeletePlace, {
        onSuccess: () => queryClient.invalidateQueries(['allPlaces']),
        onError: () => console.log('%c error deleting!', 'color: #ecb1f2; font-style:italic')
    })
}

export const useAddPlace = () => {
    return useMutation(handleAddPlace, {
        onSuccess: () => setLocationPath('/places-tracker/'),
        onError: () => console.log('%c Error', 'color: #ecb1f2; font-style:italic')
    })
}

