import {useDispatch, useSelector} from "react-redux";
import {styled} from "@mui/material";
import Logo from '../../assets/icons/icon-48x48.png';
import Button from "../Button/Button";
import {changeTheme} from "../../features/theme";
const AppBarContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${({theme}) => theme.palette.secondary.main};
  align-items: center;
`;

const AppBar = () => {
    const {currentTheme} = useSelector((state => state.theme.value));
    const dispatch = useDispatch();
    return (
        <AppBarContainer>
            <div>
                <img src={Logo} alt={'Logo image'} />
            </div>
            <div>
                <Button onClick={() => {
                    dispatch(changeTheme(currentTheme === 'dark' ? {currentTheme: 'light'} : {currentTheme: 'dark'}))
                }}>
                    Switch Theme
                </Button>
            </div>
        </AppBarContainer>
    )
}

export default AppBar;
