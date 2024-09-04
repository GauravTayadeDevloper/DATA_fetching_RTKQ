import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PublicRepo } from './types';

export const fetchRepos = createApi({
  reducerPath: 'fetchRepos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
   fetchRepos: builder.query<PublicRepo[], number | void>({
      query: () => `repositories?per_page=50&page=1`,
    
    }),
  }),
});
export const { useFetchReposQuery } = fetchRepos;
