import { apiSlice } from "./apiSlice.js";
import { COURSES_URL } from "../constants.js";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
       fetchCourseDetails: builder.query({
        query: ({courseId})=>({
            url: `${COURSES_URL}/${courseId}`
        }),
        providesTags: ['Course']
       })
    })
});

export const {
   useFetchCourseDetailsQuery,
} = courseApiSlice;