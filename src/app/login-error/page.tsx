// src/app/login-error/page.tsx

export default function LoginErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-red-600">Login Error</h1>
        </div>
        <p className="mb-4 text-gray-600 text-center">
          Invalid email or password. Please try again.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Retry Login
          </a>
          <a
            href="/signup"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
