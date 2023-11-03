import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { baseApiUrl } from "../helpers/constants";
export const setLocationPath = (path) => (window.location.href = path);

const handleDeletePlace = (id) => axios.delete(`${baseApiUrl}/places/${id}`);
const handleAddPlace = (placeFormData) =>
  axios.post(`${baseApiUrl}/places`, placeFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
  });

export const useDeletePlace = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(handleDeletePlace, {
    onSuccess: () => queryClient.invalidateQueries([`${queryKey}`]),
    onError: () =>
      console.log("%c error deleting!", "color: #ecb1f2; font-style:italic"),
  });
};

export const useAddPlace = () => {
  return useMutation(handleAddPlace, {
    onSuccess: () =>
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? null
        : setLocationPath("/places/"),
    onError: () => console.log("%c Error", "color: #ecb1f2; font-style:italic"),
  });
};
