import Button from "../Buttons/Button";
import {useHistory} from "react-router-dom";
import {TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

const NewPlace = () => {
    const [place, setPlace] = useState({});
    const history = useHistory();
    const handleChange = e => {
        console.log('%cFile: NewPlace.js, Function: handleChange, Line 10 e.target: ', 'color: pink', e.target);
        const {name, value} = e.target;
        console.log('%cFile: NewPlace.js, Function: handleChange, Line 12 name, value: ', 'color: pink', name, value);
        setPlace({
            ...place,
            [name]: value
        })
    }
    const handleSave = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/v1/places', place, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                }
            });
            console.log('%cFile: NewPlace.js, Function: handleSave, Line 18 response: ', 'color: pink', response);
        } catch (error) {
            console.log('%cFile: NewPlace.js, Function: handleSave, Line 20 error: ', 'color: pink', error);
        }
    }
    return (
        <div>
            <p>Form to create a new place</p>
            <Button onClick={() => history.goBack()}>
                Cancel
            </Button>
            <div>
                <div>
                    <p>here it will be the image picker</p>
                </div>
                <div>
                    <TextField
                        name='imageDescription'
                        label='Image Description'
                        value={place?.imageDescription}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='name'
                        label='Name'
                        value={place?.name}
                        onBlur={handleChange}
                        />
                </div>
                <div>
                    <TextField
                        name='description'
                        label='Description'
                        value={place?.description}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='stars'
                        label='Stars'
                        value={place?.stars}
                        onBlur={handleChange}
                        type='number'
                    />
                </div>
                <div>
                    <TextField
                        name='ratio'
                        label='Ration'
                        value={place?.ratio}
                        onBlur={handleChange}
                        type='number'
                    />
                </div>
                <div>
                    <TextField
                        name='address'
                        label='Address'
                        value={place?.address}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='distance'
                        label='Distance'
                        value={place?.distance}
                        onBlur={handleChange}
                        type='number'
                    />
                </div>
                <div>
                    <TextField
                        name='distanceUnit'
                        label='Distance Unit'
                        value={place?.distanceUnit}
                        onBlur={handleChange}
                    />
                </div>
            </div>
            <div>
                <Button onClick={handleSave}>Create</Button>
            </div>
        </div>
    )
}

export default NewPlace;
