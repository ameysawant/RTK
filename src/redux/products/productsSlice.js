import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
  isLoading: false,
  isError: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
