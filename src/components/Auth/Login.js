import {useDispatch} from "react-redux";
import {login} from '../../features/user';
import Button from "../Buttons/Button";
import {styled} from "@mui/material";
import {TextField} from "@mui/material";
import {useState} from "react";

const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const LoginContainer = styled('div')`
    width: 30%;
    height: 30%;
    padding: 2rem;
    background-color: #D7E4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`;

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({email: '', password: ''});
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    const handleLogin = () => {
        console.log('%cFile: Auth.js, Function: handleLogin, Line 33 user: ', 'color: pink', user);
    }
return (
    // <div>
    //     <p>from login here!</p>
    //     <Button link={'/profile'} onClick={() => dispatch(login({name: "jacobo", age: 33, email: "jacoborodicio@gmail.com"}))}>
    //         Auth
    //     </Button>
    // </div>
    <PageContainer>
        <LoginContainer>
            <TextField
                placeholder={'Email'}
                fullWidth
                name={'email'}
                type={"email"}
                value={user.email}
                onChange={handleChange}
            />
            <TextField
                placeholder={'Password'}
                fullWidth
                name={'password'}
                type={"password"}
                value={user.password}
                onChange={handleChange}
            />
            <Button onClick={handleLogin} dark width={'100%'}>Login</Button>
        </LoginContainer>
    </PageContainer>
)
}
export default Login;
