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
        console.log('%cFile: NewPlace.js, Function: handleChange, Line 18 e.target: ', 'color: pink', e.target);
        const {name, value} = e.target;
        setPlace({
            ...place,
            [name]: value
        })
    }
    const handleSave = async () => {
        try {
            let formData = new FormData();
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
            history.push('/');
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
