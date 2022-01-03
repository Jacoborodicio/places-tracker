import React, {lazy, Suspense} from 'react';
import useWindowDimensions from "./hooks/useWindowDimensions";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import './styles.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Container} from "./components/Dashboard/dashboard-styles";

// Lazy loaded imports
const Favourite  = lazy(() => import("./components/Favourite/Favourite"));
const Portal = lazy(() => import('./components/Portal/Portal'));
const Details = lazy(() => import('./components/Details/Details'));

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
    const {width, height} = useWindowDimensions();
    const containerProps = {
        dimensions: {width, height}
    };
    return (
        <CacheProvider value={myCache}>
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
            </BrowserRouter>
            </Container>
        </CacheProvider>
    )};
export default App;
