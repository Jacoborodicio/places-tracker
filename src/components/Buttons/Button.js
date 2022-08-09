/** @jsx jsx **/
import React from 'react';
import {jsx} from "@emotion/react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import {useHistory} from "react-router-dom";

const StyledButton = styled('button')`
  all: unset;
  box-sizing: border-box;
  box-shadow: ${(props => props.secondary ? 'none' : `0 0 1px 1px var(--text-accent-dark)`) };
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: 1.5rem;
  cursor: pointer;
  transition: transform .2s;
  background-color: ${(props => props.dark && '#000')};
  width: ${(props => props.width && props.width)};
  p {
    color: var(--text-accent-dark);
    text-transform: uppercase;
    padding: .25rem .5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const Button = ({children, icon, back, title, link, secondary, onClick, dark, width}) => {
    const history = useHistory();
    const handleClick = () => {
        onClick && onClick();
        back ? history.push('/') : link ? history.push(link) : null;
    }
    return (
        <StyledButton onClick={handleClick} secondary={secondary} dark={dark} width={width}>
            {back ? (<FontAwesomeIcon icon={faAngleDoubleLeft} color={'#90DCB3'}/>) : icon ? {icon} : null}
            {title && <p>{title}</p>}
            <p>{children}</p>
        </StyledButton>
    )
}

export default Button;
