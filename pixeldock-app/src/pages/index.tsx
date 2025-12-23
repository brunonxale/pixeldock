"use client";

import { useGetUsersQuery } from "@/src/services/api";
import UserForm from "@/src/components/UserForm";
import AnalyticsCard from "@/src/components/AnalyticsCard";

export default function Dashboard() {
  const { data: users, isLoading, error } = useGetUsersQuery();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          PixelDock Management Dashboard
        </h1>

        {/* Grid: Analytics + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Card */}
          <UserForm />

          {/* Analytics Card */}
          <AnalyticsCard />
        </div>

        {/* Users Table */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Users List</h2>

          {isLoading && (
            <p className="text-gray-500">Loading users...</p>
          )}

          {error && (
            <p className="text-red-500">Error loading users</p>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users?.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 transition transform hover:scale-[1.01]">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">{u.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{u.email}</td>
                  </tr>
                ))}

                {!users?.length && !isLoading && (
                  <tr>
                    <td colSpan={2} className="px-6 py-4 text-gray-500 text-center">
                      No registered users.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
