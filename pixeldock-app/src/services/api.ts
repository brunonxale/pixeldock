import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User, CreateUserRequest } from "@/src/types/user";
import type { AnalyticsResponse } from "@/src/types/api";

export const api = createApi({
  reducerPath: "api",                   // Key in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Base URL for your API endpoints
  tagTypes: ["User"],                    // Tags for cache invalidation
  endpoints: (builder) => ({
    // Fetch users
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: ["User"],           // Used to invalidate cache after mutation
      transformResponse: (response: { users: User[] }) => response.users,
    }),
    // Create a new user
    createUser: builder.mutation<User, CreateUserRequest>({
      query: (user) => ({ url: "users", method: "POST", body: user }),
      invalidatesTags: ["User"],        // Refresh user list after creation
    }),
    // Get analytics data
    getAnalytics: builder.query<AnalyticsResponse, void>({
      query: () => "analytics",
      providesTags: ["User"],           // Optional: depends if analytics relies on users
    }),
  }),
});

// Hooks for usage in components
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useGetAnalyticsQuery,
} = api;
