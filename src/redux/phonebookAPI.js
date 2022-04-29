import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6267012078638336421a5fe0.mockapi.io',
  }),
  tagTypes: [{ type: 'Contact' }],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contact', id })),
              { type: 'Contact', id: 'LIST' },
            ]
          : [{ type: 'Contact', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: body => {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),

    deleteContact: builder.mutation({
      query: id => {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Contact', id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
