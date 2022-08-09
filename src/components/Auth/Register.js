import {useDispatch} from "react-redux";
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
    padding: 2rem;
    width: 30%;
    background-color: #D7E4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`;

const Register = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({name: '', age: null, email: '', password: ''});
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    const handleRegister = () => {
        console.log('%cFile: Auth.js, Function: handleRegister, Line 33 user: ', 'color: pink', user);
    }
    return (
        <PageContainer>
            <LoginContainer>
                <TextField
                    placeholder={'Name'}
                    fullWidth
                    name={'name'}
                    type={"text"}
                    value={user.name}
                    onChange={handleChange}
                />
                <TextField
                    placeholder={'Age'}
                    fullWidth
                    name={'age'}
                    type={"number"}
                    value={user.age}
                    onChange={handleChange}
                />
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
                <Button onClick={handleRegister} dark width={'100%'}>Register</Button>
            </LoginContainer>
        </PageContainer>
    )
}
export default Register;
