/** @jsx jsx **/
import {styled, useTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStreetView} from "@fortawesome/free-solid-svg-icons/faStreetView";
import {useHistory} from "react-router-dom";
const ButtonContainer = styled('div')`
  background-color: ${({theme}) => theme.palette.secondary.main};
  width: 2rem;
  height: 2rem;
  padding: 1.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({theme}) => '1px solid ' + theme.text.secondary};
  transition: transform .2s;
  cursor: pointer;
  & span.plusIcon {
    font-size: 1.5rem;
    color: ${({theme}) => theme.text.secondary};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const CreateButton = () => {
    const history = useHistory();
    const {text} = useTheme();
    const textColor = text.secondary;
    return (
            <ButtonContainer onClick={() => history.push('/new-place')}>
            <FontAwesomeIcon icon={faStreetView} size={'sm'} color={textColor} />
            <span className={'plusIcon'}>+</span>
        </ButtonContainer>
    )
}

export default CreateButton;
