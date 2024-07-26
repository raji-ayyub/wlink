// src/app/not-found.tsx

"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Page not found
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Go Home
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
