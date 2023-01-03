import {useHistory} from "react-router-dom";
import {useState, createContext} from "react";
import axios from "axios";
import {PlaceForm} from "./PlaceForm";
import {styled} from "@mui/material";
import {ImageUpload} from "./ImageUpload";
import {useAddPlace} from "../../hooks/reactQueryCustomHooks";
export const PlaceContext = createContext(undefined);

const NewPlaceContainer = styled('div')`
  padding: 1rem;
`;
const NewPlace = () => {
    const [place, setPlace] = useState({});
    const [imageData, setImageData] = useState({});
    const history = useHistory();
    const {mutate: addPlace, isLoading: addIsLoading, isError: addIsError, error: addError} = useAddPlace();
    // TODO: Not possible to edit a value once it was recently edited
    const handleChange = e => {
        const {name, value} = e.target;
        setPlace({
            ...place,
            [name]: value
        })
    }

    const handleSave = async () => {

        let formData = new FormData();
        console.log('%cFile: NewPlace.js, Function: handleSave, Line 30 imageData: ', 'color: pink', imageData);
        Object.keys(imageData).length > 0 && formData.append(
            'placeImage',
            imageData.file,
            imageData.name
        );
        const finalPlaceInfo = JSON.stringify(place);
        formData.append('placeData', `${finalPlaceInfo}`);
        addPlace(formData);
    }

    const handleImage = imageData => {
        console.log('%cFile: NewPlace.js, Function: handleImage, Line 42 imageData: ', 'color: pink', imageData);
        setImageData(imageData);
    }
    return (
        <PlaceContext.Provider value={{place, handleChange, handleImage, handleSave}}>
            <NewPlaceContainer>
                <ImageUpload/>
                <PlaceForm />
            </NewPlaceContainer>
        </PlaceContext.Provider>
    )
}

export default NewPlace;
