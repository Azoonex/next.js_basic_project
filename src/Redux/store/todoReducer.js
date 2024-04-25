// import { createAction,createReducer,createSlice } from "@reduxjs/toolkit";

// export const addtotoCreate = createAction("ADD-TODO");
// export const removeTododActive = createAction("REMOVE-TODO");

// createReducer([],{
//     [addtotoCreate.type] : (state,actione) =>{
//         state.push(actione.payload)
//     }
// })

// export default createReducer


// create slice for some create action and reducer

import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'Todo',
    initialState:[],
    reducers:{
        addtotoCreate: (todo,action) => {
            todo.push(action.payload)
        },
        removeTodo:(todo,d)
    }
})


export const {addtotoCreate,removetodo} = slice.actions;
export default slice.caseReducers