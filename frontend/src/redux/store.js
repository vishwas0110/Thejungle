import { configureStore, createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name:"slice",
    initialState:{
        Auth:false,
        AdminAuth:false
    },
    reducers:{
        setAuth(state,actions){
            state.Auth = actions.payload
        },
        setAdminAuth(state,actions){
            state.AdminAuth = actions.payload
        }
    }
})

const Actions = Slice.actions;

const store = configureStore({reducer:Slice.reducer});

export { store,Actions };