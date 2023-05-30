import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    requests: [],
    loading: false,
}

export const fetchRequest = createAsyncThunk('request/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/requests');
        const data = res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const addRequest = createAsyncThunk(
    'add/request',
    async ({ name, number, adress, work }, thunkAPI) => {
        console.log(name, number, adress, work);
        try {
            const res = await fetch('http://localhost:3030/request', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ name: name, adress: adress, number: number, work: work })
            })

            const request = await res.json()

            return request;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const delRequest = createAsyncThunk(
    'delete/request',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3030/request/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json();

            return id;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const requestSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRequest.fulfilled, (state, action) => {
                state.requests = action.payload;
                state.loading = false;
            })
            .addCase(addRequest.fulfilled, (state, action) => {
                state.requests.push(action.payload)
            })
            .addCase(delRequest.fulfilled, (state, action) => {
                state.requests = state.requests.filter((elem) => elem._id !== action.payload)
            })
            .addCase(fetchRequest.pending, (state, action) => {
                state.loading = true;
            })
    }
});

export default requestSlice.reducer;