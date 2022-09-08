import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    comments: [],
}

export const fetchComments = createAsyncThunk('comments/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/comments');
        const data = res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const deleteComment = createAsyncThunk('comments/delete', async (id, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3030/comments/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = res.json();
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addLike = createAsyncThunk('like/add', async({id, com}, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3030/comments/${com}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        })
        const data = await res.json();
        return {id, com};
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addComments = createAsyncThunk('comments/add', async ({ user, text, id }, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/comments', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, text, film: id }),
        })
        const data = await res.json();
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const deleteLike = createAsyncThunk('like/delete', async({id,com}, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3030/comments/del/${com}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        })
        const data = res.json();
        return {id,com};
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(addComments.fulfilled, (state, action) => {
                state.comments.unshift(action.payload)
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.comments = state.comments.filter((com) => com._id !== action.payload)
            })
            .addCase(addLike.fulfilled, (state, action) => {
               state.comments = state.comments.map((item)=>{
                    if(item._id === action.payload.com){
                        item.likes.push(action.payload.id)
                    }
                    return item
                })
            })
            .addCase(deleteLike.fulfilled, (state, action) => {
                state.comments = state.comments.map((item) => {
                    if(item._id === action.payload.com) {
                        item.likes.pop(action.payload.id)
                    }
                    return item
                })
            })
    }
});

export default commentsSlice.reducer;