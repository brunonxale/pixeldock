"use client";

import { useGetAnalyticsQuery } from "@/src/services/api";
import { FaUsers } from "react-icons/fa";

export default function AnalyticsCard() {
  // Fetch analytics data using RTK Query
  const { data, isLoading, isError } = useGetAnalyticsQuery();
  // query state for debugging
  console.log("Analytics query state:", { data, isLoading, isError });
  const cardStyles =
    "p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl max-w-md w-full text-center flex flex-col items-center justify-center transition transform hover:scale-105";
  // Loading state
  if (isLoading)
    return (
      <div className={cardStyles}>
        <p className="text-gray-500">Loading statistics...</p>
      </div>
    );
  // Error state
  if (isError) {
    console.error("Failed to load analytics data");
    return (
      <div className={cardStyles}>
        <p className="text-red-500">Error loading statistics</p>
      </div>
    );
  }
  // Log data when successfully fetched
  console.log("Analytics data received:", data);
  // Render the card with statistics
  return (
    <div className={cardStyles}>
      <div className="bg-blue-200 p-4 rounded-full mb-4">
        <FaUsers className="text-blue-600 w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-gray-700">Statistics</h2>
      <p className="text-gray-800 text-lg">
        Total registered users:{" "}
        <span className="font-extrabold text-blue-600">{data?.totalUsers}</span>
      </p>
    </div>
  );
}
