import React, {lazy, Suspense} from 'react';
import useWindowDimensions from "./hooks/useWindowDimensions";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import './styles.css';
import {Route, BrowserRouter} from "react-router-dom";

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

const App = (props) => {
    const {width, height} = useWindowDimensions();
    return (
        <CacheProvider value={myCache}>
            <BrowserRouter>
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
        </CacheProvider>
    )};
export default App;
