"use client"; // Add this line at the top

import React from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Nav = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold">
          Link Sharing App
        </Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.email}</span>
              <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-4">
                Login
              </Link>
              <Link href="/register" className="bg-green-500 px-3 py-1 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
