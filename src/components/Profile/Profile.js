import {useSelector} from "react-redux";
import Button from "../Button/Button";
import {logout} from "../../features/user";
import {changeTheme} from "../../features/theme";
import {useDispatch} from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    const theme = useSelector((state) => state.theme.value);

    return (
        <div style={theme.currentTheme === "LIGHT" ? {backgroundColor: 'red'} : {}}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>

            <Button link={'/login'} onClick={() => dispatch(logout())}>
                Logout
            </Button>
            <Button onClick={() => dispatch(changeTheme(theme.currentTheme === "dark" ? {currentTheme: 'light'} : {currentTheme: "dark"}))}>
                Change Theme
            </Button>
        </div>
    )
}

export default Profile;
