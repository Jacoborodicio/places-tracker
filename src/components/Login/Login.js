import {useDispatch} from "react-redux";
import {login} from '../../features/user';
import Button from "../Button/Button";
const Login = () => {
    const dispatch = useDispatch();
return (
    <div>
        <p>from login here!</p>
        <Button link={'/profile'} onClick={() => dispatch(login({name: "jacobo", age: 33, email: "jacoborodicio@gmail.com"}))}>
            Login
        </Button>
    </div>
)
}
export default Login;
