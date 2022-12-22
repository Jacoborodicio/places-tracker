import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from './features/user';
import themeReducer from './features/theme';
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();
const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    }
});
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
        <ReactQueryDevtools/>
    </QueryClientProvider>, document.getElementById('root'));

