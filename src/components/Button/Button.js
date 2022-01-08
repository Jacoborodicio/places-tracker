/** @jsx jsx **/
import React from 'react';
import {jsx} from "@emotion/react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import {useHistory} from "react-router-dom";

const StyledButton = styled('button')`
  all: unset;
  box-shadow: ${(props => props.secondary ? 'none' : `0 0 1px 1px var(--text-accent-dark)`) };
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: .25rem .5rem;
  height: 1rem;
  cursor: pointer;
  //&:hover {
  //  background: white;
  //}
  p {
    color: var(--text-accent-dark);
    text-transform: uppercase;
  }
`;
const Button = ({children, icon, back, title, link, secondary, onClick}) => {
    const history = useHistory();
    const handleClick = () => {
        onClick && onClick();
        back ? history.push('/') : link ? history.push(link) : null;
    }
    return (
        <StyledButton onClick={handleClick} secondary={secondary}>
            {back ? (<FontAwesomeIcon icon={faAngleDoubleLeft} color={'#90DCB3'}/>) : icon ? {icon} : null}
            {title && <p>{title}</p>}
            <p>{children}</p>
        </StyledButton>
    )
}

export default Button;
