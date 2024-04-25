import { configureStore} from '@reduxjs/toolkit';

import todoReducer from './store/todoReducer'

const store = configureStore({
    reducer : todoReducer,
    devTools :false
})


