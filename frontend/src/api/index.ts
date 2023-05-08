import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const RestAPI = createApi({
    reducerPath: 'RestAPI',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        credentials: "same-origin",
        mode: "cors",
        cache: "no-cache"
    }),
    endpoints: () => ({})
});

export default RestAPI;