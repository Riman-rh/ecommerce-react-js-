import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  
  name: 'auth',
  initialState: {
    token:localStorage.getItem('token'),
    refresh:localStorage.getItem('refresh'),
    user:localStorage.getItem('user')
  },
  reducers: {
    setCredentials:(state,action) => {
        const{user,access,refresh} = action.payload
        localStorage.setItem('token', access)
        localStorage.setItem('refresh', refresh)
        localStorage.setItem('user',user)
        state.user = localStorage.getItem('user')
        state.token = localStorage.getItem('token') 
        state.refresh = localStorage.getItem('refresh') 
    },
  
    logOut:(state,action)=>{
      localStorage.removeItem('token')
      localStorage.removeItem('refresh')
      localStorage.removeItem('user')
      state.user = null
      state.token = null
      state.refresh = null
    }
   
   
  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, logOut} = authSlice.actions
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRefresh = (state) => state.auth.refresh
export default authSlice.reducer