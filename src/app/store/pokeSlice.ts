import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokeData = createAsyncThunk("poke/fetchData", async () => {
  var data: any = {};
  const uniqueTypes = new Set<String>();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
  const names = await response.json();

  await Promise.all(
    names.results.map(async (poke: any, index: number) => {
      const infoResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
      );
      const info = await infoResponse.json();
      info.types.forEach((item: any) => uniqueTypes.add(item.type.name));
      data[index + 1] = info;
    })
  );

  return {data, types: Array.from(uniqueTypes)};
});

const pokeSlice = createSlice({
  name: "poke",
  initialState: { data: null, types: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.types = action.payload.types;
        state.data = action.payload.data;
      })
      .addCase(fetchPokeData.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export default pokeSlice.reducer;
