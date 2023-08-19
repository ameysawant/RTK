import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("PRODUCTS NOT FOUND");
      }
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filterList: [],
    productList: [],
    isLoading: false,
    isError: null,
    selectedProductId: null,
  },
  reducers: {
    sendProductId: (state, { payload }) => {
      // console.log(payload);
      const { id } = payload;
      state.productList = state.filterList.filter(
        (item) => item.id === parseInt(id)
      );
      state.selectedProductId = id;
      console.log(state.singleProduct);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.isLoading = true), (state.isError = null);
        // console.log((state.isError = 'pending'));
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        // console.log(payload);
        (state.filterList = payload),
          (state.productList = payload),
          (state.isLoading = false),
          (state.isError = null);
        // console.log(state.isError = 'fulfilled');
      })
      .addCase(fetchProducts.rejected, (state) => {
        (state.isLoading = false), (state.isError = "sorry no products");
        // console.log(state.isError = 'error');
      });
  },
});

export const { sendProductId, sendProductsData } = productsSlice.actions;
export default productsSlice.reducer;
