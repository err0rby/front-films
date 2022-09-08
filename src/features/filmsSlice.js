import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    films: [],
    filmFil: [],
}


export const fetchFilms = createAsyncThunk(
    'films/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3030/films');
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })


const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filterMovie: (state, action) => {
            state.filmFil = state.films.filter((film) => {
                let yearsAndName = film.name.toLowerCase().includes(action.payload.toLowerCase().toString()) || film.year.toLowerCase().includes(action.payload.toLowerCase().toString())
                let janres = film.janres.filter((janr) => janr.name.toLowerCase().includes(action.payload.toLowerCase().toString()))
                let tegs = film.tegs.filter((teg) => teg.name.toLowerCase().includes(action.payload.toLowerCase().toString()))
                let actors = film.actors.filter((actor) => actor.name.toLowerCase().includes(action.payload.toLowerCase().toString()))
                let allCat = yearsAndName || janres.length || actors.length || tegs.length
                return (
                    allCat
                )
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.films = action.payload;
                if(state.filmFil.length < 1){
                    state.filmFil = action.payload;
                }
            })
    }
})

export const { filterMovie } = filmsSlice.actions;

export default filmsSlice.reducer;