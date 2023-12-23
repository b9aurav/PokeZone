import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokeData = createAsyncThunk('poke/fetchData', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return data;
});

const pokeSlice = createSlice({
  name: 'poke',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
extraReducers: (builder) => {
    builder
        .addCase(fetchPokeData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPokeData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchPokeData.rejected, (state, action) => {
            state.status = 'failed';
        });
},
});

export default pokeSlice.reducer;