import React, {lazy, Suspense} from 'react';
import useWindowDimensions from "./hooks/useWindowDimensions";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import './styles.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Container} from "./components/Dashboard/dashboard-styles";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import {createCustomTheme} from "./Theme/Theme";
import {ThemeProvider} from "@mui/material";
import AppBar from './components/AppBar/AppBar'
import NewPlace from "./components/NewPlace/NewPlace";
// Lazy loaded imports
const Favourite  = lazy(() => import("./components/Favourite/Favourite"));
const Portal = lazy(() => import('./components/Portal/Portal'));
const Details = lazy(() => import('./components/Details/Details'));
// const AppBar = lazy(() => import('./components/AppBar/AppBar'));
// Attached customized key to styling classes
const myCache = createCache({
    key: 'places-tracker',
    stylesPlugins: [
        prefixer
    ],
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://jacoborodicio.com/places-tracker/service-worker.js')
            .then(registration => {
                console.log('File: index.js, Function: ServiceWorker registration, Line 7 --> SW registered, registration: ', registration);
            }).catch(registrationError => console.log('File: index.js, Function: SW registration error: , Line 8 --> registrationError: ', registrationError));
    })
}

const App = () => {
    const theme = useSelector((state) => state.theme.value.currentTheme)
    const customTheme = createCustomTheme(theme);
    const {width, height} = useWindowDimensions();
    const containerProps = {
        dimensions: {width, height}
    };
    return (
        <CacheProvider value={myCache}>
            <ThemeProvider theme={customTheme}>
            <Container {...containerProps}>

            <BrowserRouter basename={'/places-tracker'}>
                <Route exact path={'/'}>
                    <Suspense fallback={''}>
                        <Portal width={width} height={height}/>
                    </Suspense>
                </Route>
                {/*Replace for a comparison tool site ?*/}
                <Route exact path={'/favourite'}>
                    <Suspense fallback={''}>
                        <Favourite width={width} height={height}/>
                    </Suspense>
                </Route>
                {/*To access to the full site details page of a location*/}
                <Route path={'/details/:id'}>
                    <Suspense fallback={''}>
                        <Details />
                    </Suspense>
                </Route>
                <Route path={'/profile'}>
                    <Suspense fallback={''}>
                        <Profile />
                    </Suspense>
                </Route>
                <Route path={'/login'}>
                    <Suspense fallback={''}>
                        <Login />
                    </Suspense>
                </Route>
                <Route path={'/new-place'}>
                    <Suspense fallback={''}>
                        <NewPlace />
                    </Suspense>
                </Route>
            <AppBar />
            </BrowserRouter>
            </Container>
            </ThemeProvider>
        </CacheProvider>
    )};
export default App;
