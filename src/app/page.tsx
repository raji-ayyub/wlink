// // src/app/login/page.tsx

// "use client";

// import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const { login } = useAuth();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       setError(null);
//       router.push("/home");  // Redirect to Home Page on success
//     } catch (error) {
//       setError("Invalid email or password.");  // Show error message
//       router.push("/login-error");  // Redirect to Login Error Page on failure
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white md:bg-gray lg:bg-gray">
      
//       <div className="text-center gap-3 flex mb-8">
//           <img 
//             src="../images/logo.png" 
//             width={40}
            
            
//           />
//           <h1 className="text-4xl text-black font-bold">devlinks</h1>
//       </div>
      
      
//       <div className="bg-white p-7 rounded-lg lg:shadow-lg md:shadow-lg max-w-md w-full">
        
//         <h1 className="text-3xl text-black font-semibold mb-4">Login</h1>
//         <p className="mb-10 text-md text-black">
//           Add your details below to get back into the app
//         </p>
//         <form onSubmit={handleLogin} className="space-y-6 ">

//           {/* <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
//                 error ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="e.g. alex@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div> */}

//           <div>
//             <label htmlFor="email" className="block text-xs font-medium text-gray-700">
//                 Email address
//               </label>

//             <div className={`inp mb-4 flex items-center gap-2  w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
//                   error ? "border-red-500" : "border-defaultp"
//                 }`}>
//                 <img src="/images/envelope.svg" alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
//                 <input
//                   type="email"
//                   id="email"
//                   className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"
//                   placeholder="Enter your email address"
//                   required
//                 />
//             </div>
//           </div>


//           <div>
//             <label htmlFor="email" className="block text-xs font-medium text-gray-700">
//                   Password
//             </label>

//             <div className={`inp mb-4 flex items-center gap-2 w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
//               error ? "border-red-500" : "border-defaultp"
//             }`}>
//               <img src="/images/lock.svg" alt="Lock Icon" className="h-5 w-5 text-gray-500" />
//               <input
//                 type="password"
//                 id="password"
//                 className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>


//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <div>
//             <button
//               type="submit"
//               className="w-bw-md h-bh-md  btn-p"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <p>
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
//               Create account
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/app/login/page.tsx

"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(null);
      router.push("/home");  // Redirect to Home Page on success
    } catch (error) {
      setError("Invalid email or password.");  // Show error message
      router.push("/login-error");  // Redirect to Login Error Page on failure
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:bg-gray lg:bg-gray">
      
      <div className="text-center gap-3 flex mb-8">
          <img 
            src="../images/logo.png" 
            width={40}
          />
          <h1 className="text-4xl text-black font-bold">devlinks</h1>
      </div>
      
      <div className="bg-white p-7 rounded-lg lg:shadow-lg md:shadow-lg max-w-md w-full">
        
        <h1 className="text-3xl text-black font-semibold mb-4">Login</h1>
        <p className="mb-10 text-md text-black">
          Add your details below to get back into the app
        </p>
        <form onSubmit={handleLogin} className="space-y-6 ">

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700">
              Email address
            </label>
            <div className={`inp mb-4 flex items-center gap-2  w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
                  error ? "border-red-500" : "border-defaultp"
                }`}>
                <img src="/images/envelope.svg" alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  className="flex-grow bg-transparent placeholder-gray-400 focus:outline-none text-sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-gray-700">
              Password
            </label>
            <div className={`inp mb-4 flex items-center gap-2 w-bw-md h-bh-md px-2 border rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none ${
              error ? "border-red-500" : "border-defaultp"
            }`}>
              <img src="/images/lock.svg" alt="Lock Icon" className="h-5 w-5 text-gray-500" />
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

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-bw-md h-bh-md btn-p"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
