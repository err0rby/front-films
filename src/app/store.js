import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import usersSlice from "../features/usersSlice";
import filmsSlice from "../features/filmsSlice";
import commentsSlice from "../features/commentsSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        usersSlice,
        filmsSlice,
        commentsSlice,
    }
})

export default store;