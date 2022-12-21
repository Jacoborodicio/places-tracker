import React, {useContext} from 'react';
import {styled, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {PlaceContext} from "./NewPlace";
import Button from "../Buttons/Button";
import {FavouriteStart} from "../Buttons/FavouriteStart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";


const FormContainer = styled('div')`
  background-color: ${({theme}) => theme.palette.primary.light};
  border-radius: .25rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

export const PlaceForm = () => {
    const {place, handleChange, handleImage, handleSave} = useContext(PlaceContext);

    return (
        <FormContainer>
            {/*<ImageFormContainer>*/}
            {/*    <div>*/}
            {/*        <p>here it will be the image picker</p>*/}
            {/*        <ImagePicker viewport={{width: 100, height: 100, type: 'square'}} handleImage={handleImage} file={place?.image} />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <TextField*/}
            {/*            name='imageDescription'*/}
            {/*            label='Image Description'*/}
            {/*            value={place?.imageDescription}*/}
            {/*            onBlur={handleChange}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</ImageFormContainer>*/}

            <div>
                <TextField
                    name='name'
                    label='Name'
                    value={place?.name}
                    onChange={handleChange}
                    fullWidth
                    />
            </div>
            <div>
                <TextField
                    name='description'
                    label='Description'
                    value={place?.description}
                    onChange={handleChange}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    name='thumbsUp'
                    label='Thumbs Up'
                    value={place?.thumbsUp}
                    onChange={handleChange}
                    type='number'
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    name='ratio'
                    label='Ratio'
                    value={place?.ratio}
                    onChange={handleChange}
                    type='number'
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    name='address'
                    label='Address'
                    value={place?.address}
                    onChange={handleChange}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    name='distance'
                    label='Distance'
                    value={place?.distance}
                    onChange={handleChange}
                    type='number'
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    name='distanceUnit'
                    label='Distance Unit'
                    value={place?.distanceUnit}
                    onChange={handleChange}
                    fullWidth
                />
            </div>
            <div>
                <FavouriteStart name='favourite' onClick={handleChange} active={place?.favourite} />
            </div>
            <div>
                <Button onClick={handleSave}>Create</Button>
            </div>
        </FormContainer>
    )
}

PlaceForm.PropTypes = {
    place: PropTypes.shape({
        imageDescription: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        thumbsUp: PropTypes.number,
        ratio: PropTypes.number,
        address: PropTypes.string,
        distance: PropTypes.number,
        distanceUnit: PropTypes.string,
        favourite: PropTypes.bool
    })
}