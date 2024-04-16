
import {configureStore} from '@reduxjs/toolkit'
import ReduxState from './ReduxState';



 const store = configureStore({

    reducer :{
        baseVal: ReduxState
    },
});

export default store;