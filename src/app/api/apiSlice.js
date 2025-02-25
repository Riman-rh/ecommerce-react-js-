import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials,logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
      baseUrl:'http://localhost:8000',
      credentails: 'include',
      prepareHeaders: (headers,{getState})=>{
        const token = getState().auth.token
        if(token){
            headers.set("authorization",`JWT ${token}`)
        }
        return headers
      }

})

const baseQueryWithReauth = async (args,api,extraOptions)=>{
    let result = await baseQuery(args,api,extraOptions)
    if (result?.error?.originalStatus === 403){
        console.log('sending refresh token')
        const refreshResult = await baseQuery('/jwt/refresh/', api, extraOptions)
        console.log (refreshResult)
        if(refreshResult?.data){
            api.displatch(setCredentials({refreshResult}))
            result = await baseQuery(args, api, extraOptions)
        }else{
            api.displatch(logOut())
        }

    }
    return result 
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder =>({})
})