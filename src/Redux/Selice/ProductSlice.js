import { createSlice} from '@reduxjs/toolkit';

const ProductArray = createSlice({
    name : "ProductArray",

    initialState : {
        produsts : [],
    },
    reducers : {
        produstsData : (state, action)=>{
            const val = {
                data : action.payload
            }  
            const val2 = state.produsts = (val.data)
            
            
        }
    }
}
)

export const {produstsData} = ProductArray.actions;

export default  ProductArray.reducer