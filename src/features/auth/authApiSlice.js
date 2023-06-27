import { apiSlice } from "../../app/api/apiSlice";


    const userApiSlice = apiSlice.injectEndpoints({
        endpoints: builder =>({
                user:builder.mutation({
                query: credentials =>({
                    url:'/auth/users/me/',
                    method:'GET',
                })
            }),
    
        })
    })

 const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        login:builder.mutation({
            query: credentials =>({
                url:'/auth/jwt/create/',
                method:'POST',
                body:{...credentials}
            })
        }),

    })
})



export const {
    useLoginMutation
}= authApiSlice

export const {
    useUserMutation
}= userApiSlice