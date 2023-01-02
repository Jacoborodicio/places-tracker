import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

export const setLocationPath = path => window.location.href = path;
// const baseApiUrl = process.env["REACT_APP_API_URL "];
const baseApiUrl = 'https://jacoborodicio.com/api/v1';

const handleDeletePlace = id => axios.delete(`${baseApiUrl}/places/${id}`);
const handleAddPlace = placeFormData => axios.post(`${baseApiUrl}/places`, placeFormData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': '*/*',
    }
});

export const useDeletePlace = (queryKey) => {
    const queryClient = useQueryClient();
    return useMutation(handleDeletePlace, {
        onSuccess: () => queryClient.invalidateQueries([`${queryKey}`]),
        onError: () => console.log('%c error deleting!', 'color: #ecb1f2; font-style:italic')
    })
}

export const useAddPlace = () => {
    return useMutation(handleAddPlace, {
        onSuccess: () => setLocationPath('/places/'),
        onError: () => console.log('%c Error', 'color: #ecb1f2; font-style:italic')
    })
}

