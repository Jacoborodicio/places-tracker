import React, {useContext} from 'react';
import {styled, TextField} from "@mui/material";
import {PlaceContext} from "./NewPlace";
import ImagePicker from "../ImagePicker/ImagePicker";

const ImageMainContainer = styled('div')`
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  border-radius: .25rem;
  //border: 1px solid ${({theme}) => theme.text.secondary};
  background-color: ${({theme}) => theme.palette.primary.light};
`;

export const ImageUpload = () => {
    const {place, handleChange, handleImage} = useContext(PlaceContext);

    return (
        <ImageMainContainer>
            <ImagePicker viewport={{width: 100, height: 100, type: 'square'}} handleImage={handleImage} file={place?.image} />
            <div>
                <TextField
                    name='imageDescription'
                    label='Image Description'
                    style={{width: '100%'}}
                    value={place?.imageDescription}
                    onBlur={handleChange}
                />
            </div>
        </ImageMainContainer>
    )
}