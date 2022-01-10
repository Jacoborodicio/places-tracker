import {useDispatch, useSelector} from "react-redux";
import {styled} from "@mui/material";
import Logo from '../../assets/icons/icon-48x48.png';
import Button from "../Buttons/Button";
import {changeTheme} from "../../features/theme";
import CreateButton from "../Buttons/CreateButton";
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
  }
`;

const AppBar = () => {
    const {currentTheme} = useSelector((state => state.theme.value));
    const dispatch = useDispatch();
    return (
        <AppBarContainer>
            <div>
                <img src={Logo} alt={'Logo image'} />
            </div>
            <div className={'actionsContainer'}>
                <Button onClick={() => {
                    dispatch(changeTheme(currentTheme === 'dark' ? {currentTheme: 'light'} : {currentTheme: 'dark'}))
                }}>
                    Switch Theme
                </Button>
                <CreateButton />
            </div>
        </AppBarContainer>
    )
}

export default AppBar;
