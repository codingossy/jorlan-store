import { createSlice } from "@reduxjs/toolkit";
// url
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

// calling the entire categories function
// dispatching the setStatus once the catgeories is fetch

export const getCategories = () => {
  return async function getCategoriesThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${BASE_URL}categories`);
      const data = await response.json();
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

// get products by categories status
// adding the categoryID as a parameter from the api
// also setting the datatype for check

export const getProductsByCategory = (categoryID, dataType) => {
  return async function getCategoryProductThunk(dispatch) {
    if (dataType === "all") dispatch(setCategoriesStatusAll(STATUS.LOADING));
    if (dataType === "single")
      dispatch(setCategoriesStatusSingle(STATUS.LOADING));

    try {
      const response = await fetch(
        `${BASE_URL}categories/${categoryID}/products`
      );
      const data = await response.json();
      if (dataType === "all") {
        dispatch(setCategoriesProductAll(data.slice(0, 10)));
        dispatch(setCategoriesStatusAll(STATUS.IDLE));
      }
      if (dataType === "single") {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)));
        dispatch(setCategoriesStatusSingle(STATUS.IDLE));
      }
    } catch (error) {
      dispatch(setCategoriesStatusAll(STATUS.ERROR));
    }
  };
};

const initialState = {
  data: [],
  status: STATUS.IDLE,
  categoryProductAll: [],
  categoryProductAllStatus: STATUS.IDLE,
  categoryProductSingle: [],
  categoryProductSingleStatus: STATUS.IDLE,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // settiing each categories directly
    setCategories: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCategoriesProductAll: (state, action) => {
      state.categoryProductAll.push(action.payload);
    },
    setCategoriesStatusAll: (state, action) => {
      state.categoryProductAllStatus = action.payload;
    },
    setCategoriesProductSingle: (state, action) => {
      state.categoryProductSingle = action.payload;
    },
    setCategoriesStatusSingle: (state, action) => {
      state.categoryProductSingleStatus = action.payload;
    },
  },
// not using this
  extraReducers: {
    [getProductsByCategory.fulfilled]: (state, action) =>{
      state.data = action.payload,
      state.loading = false
    },
    [getCategories.fulfilled]: (state, action) =>{
      state.categoryProductAll = action.payload,
      state.loading = false
    },
  },
});

export const {
  setCategories,
  setStatus,
  setCategoriesProductAll,
  setCategoriesProductSingle,
  setCategoriesStatusAll,
  setCategoriesStatusSingle,
} = categorySlice.actions;

export default categorySlice.reducer;
