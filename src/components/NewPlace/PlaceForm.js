import React, {useContext} from 'react';
import {styled, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {PlaceContext} from "./NewPlace";
import Button from "../Buttons/Button";
import {FavouriteStart} from "../Buttons/FavouriteStart";

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
    const {place, handleChange, handleSave} = useContext(PlaceContext);

    return (
        <FormContainer>
            <div>
                <TextField
                    name='name'
                    label='Name'
                    value={place?.name}
                    onChange={handleChange}
                    fullWidth
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
                    />
            </div>
            <div>
                <TextField
                    name='description'
                    label='Description'
                    value={place?.description}
                    onChange={handleChange}
                    fullWidth
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
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
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
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
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
                />
            </div>
            <div>
                <TextField
                    name='address'
                    label='Address'
                    value={place?.address}
                    onChange={handleChange}
                    fullWidth
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
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
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
                />
            </div>
            <div>
                <TextField
                    name='distanceUnit'
                    label='Distance Unit'
                    value={place?.distanceUnit}
                    onChange={handleChange}
                    sx={(theme => (
                        {input: {color: theme['text'].primary}}
                    ))}
                    fullWidth
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <div style={{marginRight: '3rem'}}>
                    <p>Set as favourite</p>
                </div>
                <FavouriteStart name='favourite' onClick={handleChange} active={!!place?.favourite} />
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Button style={{width: '100%'}} onClick={handleSave}>Create</Button>
            </div>
        </FormContainer>
    )
}

PlaceForm.propTypes = {
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