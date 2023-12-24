import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const fetchPokeData = createAsyncThunk("poke/fetchData", async (page: number, { getState }) => {
  const data: any = {};
  const uniqueTypes = new Set<String>();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page * 20}`);
  const names = await response.json();

  await Promise.all(
    names.results.map(async (poke: any, index: number) => {
      const infoResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${page * 20 + index + 1}/`
      );
      const info = await infoResponse.json();
      info.types.forEach((item: any) => uniqueTypes.add(item.type.name));
      data[page * 20 + index + 1] = info;
    })
  );

  const existingData = (getState() as RootState).poke.data || {};
  const existingTypes = (getState() as RootState).poke.types || [];

  return {
    data: { ...existingData, ...data },
    types: Array.from(new Set([...existingTypes, ...Array.from(uniqueTypes)]))
  };
});

const pokeSlice = createSlice({
  name: "poke",
  initialState: { data: null, types: null, status: "idle", error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokeData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPokeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.types = action.payload.types;
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchPokeData.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
      })
  },
});

export default pokeSlice.reducer;
