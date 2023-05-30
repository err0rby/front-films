import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import usersSlice from "../features/usersSlice";
import filmsSlice from "../features/filmsSlice";
import commentsSlice from "../features/commentsSlice";
import requestSlice from "../features/requestSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        usersSlice,
        filmsSlice,
        commentsSlice,
        requestSlice,
    }
})

export default store;