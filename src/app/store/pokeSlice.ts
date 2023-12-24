import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokeData = createAsyncThunk("poke/fetchData", async () => {
  var data: any = {};
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
  const names = await response.json();

  await Promise.all(
    names.results.map(async (poke: any, index: number) => {
      const infoResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
      );
      const info = await infoResponse.json();
      data[index + 1] = info;
    })
  );

  return data;
});

export const fetchPokeInfo = createAsyncThunk(
  "poke/fetchInfo",
  async (id: number) => {}
);

const pokeSlice = createSlice({
  name: "poke",
  initialState: { data: null, info: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPokeData.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchPokeInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokeInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.info = action.payload;
      })
      .addCase(fetchPokeInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default pokeSlice.reducer;
