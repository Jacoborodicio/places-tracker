import {useHistory} from "react-router-dom";
import {useState, createContext} from "react";
import axios from "axios";
import {PlaceForm} from "./PlaceForm";
import {styled} from "@mui/material";
import {ImageUpload} from "./ImageUpload";
export const PlaceContext = createContext(undefined);

const NewPlaceContainer = styled('div')`
  padding: 1rem;
`;
const NewPlace = () => {
    const [place, setPlace] = useState({});
    const [imageData, setImageData] = useState({});
    const history = useHistory();
    // TODO: Not possible to edit a value once it was recently edited
    const handleChange = e => {
        console.log('%cFile: NewPlace.js, Function: handleChange, Line 13 e: ', 'color: pink', e);
        const {name, value} = e.target;
        setPlace({
            ...place,
            [name]: value
        })
    }
    const handleSave = async () => {
        console.log('%cFile: NewPlace.js, Function: handleSave, Line 52 place: ', 'color: pink', place);
        console.log('%cFile: NewPlace.js, Function: handleSave, Line 53 imageData: ', 'color: pink', imageData);
        try {
            let formData = new FormData();
            console.log('%cFile: NewPlace.js, Function: handleSave, Line 28 imageData: ', 'color: pink', imageData);
            formData.append(
                'placeImage',
                imageData.file,
                imageData.name
            );
            const finalPlaceInfo = JSON.stringify(place);
            formData.append('placeData', `${finalPlaceInfo}`);
            const response = await axios.post('http://localhost:9000/api/v1/places', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                }
            });
            console.log('%cFile: NewPlace.js, Function: handleSave, Line 72 response: ', 'color: pink', response);
            history.goBack();
        } catch (error) {
            console.log('%cFile: NewPlace.js, Function: handleSave, Line 20 error: ', 'color: pink', error);
        }
    }

    const handleImage = imageData => {
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
