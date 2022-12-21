import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Croppie from 'croppie';
import "croppie/croppie.css"
import {faCopy} from "@fortawesome/free-solid-svg-icons/faCopy";
import {styled} from "@mui/material";

const ImageUploadInput = styled('input')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const ImagePicker = (props) => {
    const {viewport, handleImage} = props
    const [croppie, setCroppie] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        return () => {
            setCroppie(null);
        }
    }, [])

    useEffect(() => {
        if (file && !croppie) {
            const el = document.getElementById("image-helper")

            if (el) {
                const croppieInstance = new Croppie(el, {
                    viewport: calcViewport(viewport),
                    boundary: calcBoundary(viewport)
                })


                croppieInstance.bind({url: file.preview}).then(() => {
                    croppieInstance.setZoom(0);
                    setCroppie(croppieInstance);
                });
            }
        }
    }, [file])

    const handleSelectImage = e => {
        console.log('%cFile: ImagePicker.js, Function: handleSelectImage, Line 38 image: ', 'color: pink', e.target.files);
        const uploadedFile = e.target.files[0]; // Single selection
        console.log('%cFile: ImagePicker.js, Function: handleSelectImage, Line 42 uploadedFile: ', 'color: pink', uploadedFile);
        // setFile(uploadedFile);
        const newFile = new Blob([uploadedFile], {type: uploadedFile.type} );
        console.log('%cFile: ImagePicker.js, Function: handleSelectImage, Line 44 newFile: ', 'color: pink', newFile);
        // const x = new File([newFile], uploadedFile.name, {type: uploadedFile.type})
        console.log('%cFile: ImagePicker.js, Function: handleSelectImage, Line 44 newFile: ', 'color: pink', newFile);
        setFile({
            file: newFile,
            fileName: uploadedFile.name,
            preview: URL.createObjectURL(newFile)
        })
    }
    const calcViewport = (viewport) => {
        if (viewport.height <= 32) {
            return {height: viewport.height*2, width: viewport.width*2}
        } else {
            return {height: viewport.height, width: viewport.width}
        }
    }

    const calcBoundary = (viewport) => {
        if (viewport.height <= 32) {
            return {height: viewport.height*4, width: viewport.width*4}
        } else {
            return {height: viewport.height*2, width: viewport.width*2}
        }
    }

    const handleSelect = () => {
        console.log('%c in select img', 'color: #ecb1f2; font-style:italic');
        console.log('%cFile: ImagePicker.js, Function: handleSelect, Line 56 viewport: ', 'color: pink', viewport);
        croppie.result({
            type: 'blob',
            size: {
                height: viewport.height,
                width: viewport.width
            }
        }).then((blob) => {
            const newFile = new File([blob], file.fileName, {type: file.file.type});
            console.log('%cFile: ImagePicker.js, Function: newF, Line 78 newFile: ', 'color: pink', newFile);
            setFile({
                ...file,
                file: blob
            })
            handleImage(file);
        })
    }

    return (
        <div>
            {!file && (
                <>
                    <Button title='Select image' style={{position: 'relative', marginBottom: '.25rem'}}>
                        <ImageUploadInput type='file' name='placeImage' accept='image/*' onChange={handleSelectImage} />
                    </Button>
                </>
            )}
            <div id={'image-helper'} />
            {file?.preview && croppie && (
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '.5rem'}}>
                    <Button title='Crop' onClick={handleSelect} style={{width: '11.5rem'}}/>
                </div>
            )}
        </div>
    )
}

ImagePicker.propTypes = {
    viewport: PropTypes.object.isRequired,
    file: PropTypes.object,
    handleImage: PropTypes.func.isRequired,
}

export default ImagePicker;