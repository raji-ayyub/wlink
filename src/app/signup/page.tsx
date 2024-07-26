// src/app/signup/page.tsx

"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await register(email, password);
      setError(null);
      router.push("/home");  // Redirect to Home Page on success
    } catch (error) {
      setError("Registration failed. Please try again.");  // Show error message
      router.push("/signup-error");  // Redirect to Sign-Up Error Page on failure
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      <div className="text-center gap-3 flex mb-8">
          <img 
            src="../images/logo.png" 
            width={40}
            
            
          />
          <h1 className="text-4xl font-bold">devlinks</h1>
      </div>
      
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        
        <h2 className="text-xl font-semibold mb-6">Create Account</h2>
        <p className="mb-4 text-gray-600">
          Let’s get you started by creating your account
        </p>
        <form onSubmit={handleRegister} className="space-y-6">



          <div>

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className={`inp mb-4 flex items-center gap-2  w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
                    error ? "border-red-500" : "border-defaultp"
                  }`}>
              
              <img src="/images/envelope.svg" alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"
                  placeholder="e.g. alex@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>


            <div className={`inp mb-4 flex items-center gap-2  w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
                    error ? "border-red-500" : "border-defaultp"
                  }`}>
              <img src="/images/lock.svg" alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
              <input
                type="password"
                id="password"
                className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"       
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

          </div>


          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <div className={`inp mb-4 flex items-center gap-2  w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
                    error ? "border-red-500" : "border-defaultp"
                  }`}>
                <img src="/images/lock.svg" alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
                <input
                  type="password"
                  id="confirmPassword"
                  className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
            </div>
          </div>


          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:text-indigo-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
