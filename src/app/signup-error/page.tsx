// src/app/signup-error/page.tsx

export default function SignUpErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-red-600">Sign-Up Error</h1>
        </div>
        <p className="mb-4 text-gray-600 text-center">
          Registration failed. Please try again.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/signup"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Retry Sign-Up
          </a>
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
