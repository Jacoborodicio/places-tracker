import {useDispatch, useSelector} from "react-redux";
import {styled, useTheme} from "@mui/material";
import Logo from '../../assets/icons/icon-48x48.png';
import Button from "../Buttons/Button";
import {changeTheme} from "../../features/theme";
import CreateButton from "../Buttons/CreateButton";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHistory} from "@fortawesome/free-solid-svg-icons/faHistory";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";

const AppBarContainer = styled('div')`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${({theme}) => theme.palette.secondary.main};
  align-items: center;
  & div.actionsContainer {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
    flex-basis: 16%;
  }
`;

const SectionsContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: transform .2s;
  & div.sectionContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const AppBar = () => {
    const {currentTheme} = useSelector((state => state.theme.value));
    const dispatch = useDispatch();
    const history = useHistory();
    const {text} = useTheme();
    const textColor = text.secondary;
    return (
        <AppBarContainer>
            <div style={{cursor: "pointer"}} onClick={() => history.push('/')}>
                <img src={Logo} alt={'Logo image'} />
            </div>
            <SectionsContainer>
                {/*<div className={'sectionContainer'} onClick={() => history.push('/recent')}>*/}
                {/*    <FontAwesomeIcon icon={faHistory} color={textColor} />*/}
                {/*    <p>Recent</p>*/}
                {/*</div>*/}
                <div className={'sectionContainer'} onClick={() => history.push('/favourite')}>
                    <FontAwesomeIcon icon={faStar} color={textColor} />
                    <p>Favourites</p>
                </div>
                {/*<div className={'sectionContainer'} onClick={() => history.push('/configuration')}>*/}
                {/*    <FontAwesomeIcon icon={faCogs} color={textColor} />*/}
                {/*    <p>Configuration</p>*/}
                {/*</div>*/}
            </SectionsContainer>
            <div className={'actionsContainer'}>
                <Button onClick={() => {
                    dispatch(changeTheme(currentTheme === 'dark' ? {currentTheme: 'light'} : {currentTheme: 'dark'}))
                }}>
                    Theme
                </Button>
                <CreateButton />
            </div>
        </AppBarContainer>
    )
}

export default AppBar;
