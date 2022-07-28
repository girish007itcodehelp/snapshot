// import baseAxios from "@baseApi/base";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../firebase/clientApp";
import { RootState } from "redux/store";
import baseAxios from "@baseApi/base";



interface AuthInterface {
    isAuthenticated: boolean,
    loading: boolean,
    user: object,
}

const initialState: AuthInterface = {
    isAuthenticated: false,
    loading: false,
    user: {}
};

export const loginUser = createAsyncThunk("auth/login", async (data) => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
        unsubscribe();
    })
    console.log("unsubscribe", unsubscribe)
    // let currentUser;

    // let abc = onAuthStateChanged(auth, async (user) => {
    //     if (user) currentUser = user
    // })
    return unsubscribe;
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = { data: payload }
            })
            .addCase(loginUser.rejected, (state) => {
                state.isAuthenticated = false;
                state.loading = false;
            });
    },
});

export const authState = (state: RootState) => state.auth;
