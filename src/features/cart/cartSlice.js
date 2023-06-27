import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  
  name: 'cart',
  initialState: {
    tab:[]
  },
  reducers: {
   
    addCart: (state, action) => {
      var found = false
      for(var i=0; i< state.tab.length; i++){
        if(state.tab[i].id == action.payload.id){
            found=true
        }

      }
      if(found==false){
        state.tab.push(action.payload)
      }else{
        alert('this product already exist')
      }
            
     
        },
     deleteCart:(state, action) => {
  
          state.tab = state.tab.filter(element => element.id !== action.payload)
   
      }
  },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart} = cartSlice.actions
export const selectcart = state => state.cart.tab


export default cartSlice.reducer