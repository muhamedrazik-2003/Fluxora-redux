import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: "",
    productCopy: [],
    productsPerPage: 12,
    currentPage: 1,
  },
  reducers: {
    search(state, action) {
      const keyword = action.payload.toLowerCase();

      if (keyword.length > 0) {
        state.products = state.products.filter((item) => item.title.toLowerCase().includes(keyword));
      } else {
        state.products = state.productCopy
      }
    },
    previousPage(state) {
      state.currentPage -= 1;
    },
    nextPage(state) {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.productCopy = action.payload.products;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.loading = false;
      state.error = "Failed to fetch Products Data";
    });
  },
});

export const { search, previousPage, nextPage } = productSlice.actions;
export default productSlice.reducer;
