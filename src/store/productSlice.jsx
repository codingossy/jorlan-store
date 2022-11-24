import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

//  leads to home then product list
// to fetch products
// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (dispatch) => {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const response = await fetch(`${BASE_URL}products`);
//       const data = await response.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   }
// );

//  oga, this method works too which is best adviced since u already know it abeg
 export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (dispatch) => {
      dispatch(setStatus(STATUS.LOADING))
      const response = await axios.get(`${BASE_URL}products`)
      return response.data
  }

)

const initialState = {
  data: [],
  status: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.data = action.payload
    }
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;
