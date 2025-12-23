"use client";

import { useState } from "react";
import { useCreateUserMutation } from "@/src/services/api";
import { FaUserPlus } from "react-icons/fa";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createUser, { isLoading, isError, error }] = useCreateUserMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data before submission
    console.log("Form submission attempt:", { name, email });
    // Validation: check if fields are empty
    if (!name || !email) {
      console.warn("Submission blocked: name or email is missing");
      return;
    }
    try {
      // Attempt to create user
      const response = await createUser({ name, email }).unwrap();
      // Log successful creation
      console.log("User created successfully:", response);
      setName("");
      setEmail("");
      alert("User created successfully");
    } catch (err) {
      // Log error
      console.error("Error creating user:", err);
      alert("Error creating user");
    }
  };

  return (
    <div className="bg-gradient-to-r from-white to-blue-50 shadow-lg rounded-xl p-6 max-w-md w-full mx-auto flex flex-col items-center transition transform hover:scale-105">

      <div className="bg-blue-200 p-4 rounded-full mb-4">
        <FaUserPlus className="text-blue-600 w-8 h-8" />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Add User</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`p-3 rounded-md text-white font-medium transition w-full ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Creating..." : "Create User"}
        </button>
        {isError && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Error: {(error as any)?.data?.message || "Something went wrong"}
          </p>
        )}
      </form>
    </div>
  );
}
