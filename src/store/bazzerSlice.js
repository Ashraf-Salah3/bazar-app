import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
    productData: [],
    userInfo: null
}
export const bazzerSlice = createSlice({
    name:"BAZZER",
    initialSlice,
    reducers:{
        addToCart:(state, action)=>{
            state.productData = action.payload
        }
    }
})

export const bazzerAction = bazzerSlice.actions
export default bazzerSlice