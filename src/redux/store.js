import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
// import { Provider } from 'react-redux';

// import store from './redux/store'; // Ensure the path is correct

const store = configureStore({
    reducer:{
        user:userReducer,

    },
});
export default store;