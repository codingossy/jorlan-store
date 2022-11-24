import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: [],
    isModalShowing: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData:(state, action) =>{
        state.data = action.payload
    },
    setIsModalShowing: (state, action) => {
        state.isModalShowing = action.payload
    }
  }
});

export const { setModalData, setIsModalShowing  } = modalSlice.actions

export default modalSlice.reducer