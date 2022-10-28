import React from 'react';
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const FavouriteStart = ({onClick, active, name, disabled, onlyActive}) => {
    return !onlyActive ? <FontAwesomeIcon onClick={() => !disabled && onClick({target: {name, value: !active}})} icon={faStar} color={active ? '#FFEC00' : '#C1C1C1'} />
        : active ? <FontAwesomeIcon onClick={() => !disabled && onClick({target: {name, value: !active}})} icon={faStar} color={active ? '#FFEC00' : '#C1C1C1'} /> : null
}
FavouriteStart.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onlyActive: PropTypes.bool, // It avoids to show the start when no active
}
FavouriteStart.defaultProps = {
    onClick: () => console.log('No function provided'),
}
