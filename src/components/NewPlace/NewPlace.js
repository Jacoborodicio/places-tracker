import Button from "../Buttons/Button";
import {useHistory} from "react-router-dom";
import {TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FavouriteStart} from "../Buttons/FavouriteStart";
import ImagePicker from "../ImagePicker/ImagePicker";

const NewPlace = () => {
    const [place, setPlace] = useState({});
    const history = useHistory();
    // TODO: Not possible to edit a value once it was recently edited
    const handleChange = e => {
        const {name, value} = e.target;
        setPlace({
            ...place,
            [name]: value
        })
    }
    const handleSave = async () => {
        /**
         * const finalDto = JSON.stringify({
         *       ...this.state.project,
         *       versionList: [{...this.state.currentVersionData}]
         *     });
         *     const blob = new Blob([finalDto], {type: 'application/json'});
         *     let formData = new FormData();
         *     formData.append('dto', blob);
         *     formData.append('isRequest', final);
         *     Object.keys(this.state.fileObjects).forEach(mainKey => {
         *       Object.keys(this.state.fileObjects[mainKey]).forEach(key => {
         *         formData.append(
         *           this.state.currentVersionData.value.filesUpload[mainKey].varName,
         *           this.state.fileObjects[mainKey][key],
         *           this.state.fileObjects[mainKey][key].name
         *         );
         *       });
         *     });
         *     axios
         *       .put(`${apiAcquisitionUrl}/evaluation/bc`, formData)
         *       .then(() => {
         *         this.callToApi(this.state.queryParams.id);
         *       })
         *       .catch(error => {
         *         handleCommonSavingError(error, this.props.onSave);
         *         this.setState({isLoading: false});
         *       });
         * */
        try {
            const response = await axios.post('http://localhost:9000/api/v1/places', place, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                }
            });
            history.goBack();
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
                    <ImagePicker viewport={{width: 100, height: 100, type: 'square'}} handleCrop={(file) => console.log('%c crop', 'color: #ecb1f2; font-style:italic', file)} file={place?.image} />
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
                        name='thumbsUp'
                        label='Thumbs Up'
                        value={place?.thumbsUp}
                        onBlur={handleChange}
                        type='number'
                    />
                </div>
                <div>
                    <TextField
                        name='ratio'
                        label='Ratio'
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
                <div>
                    <FavouriteStart name='favourite' onClick={handleChange} active={place?.favourite} />
                </div>
            </div>
            <div>
                <Button onClick={handleSave}>Create</Button>
            </div>
        </div>
    )
}

export default NewPlace;
