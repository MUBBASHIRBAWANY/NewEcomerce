import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  items: [],
}

  const ProductSlice = createSlice({
    name: 'ProductData',
    initialState,
    reducers :{
      productSlice : (state,action)=>{
          console.log(action.payload)      
      }
  }
  
  })
  
  
  export const {productSlice} = ProductSlice.reducer
  
  export default ProductSlice.reducer