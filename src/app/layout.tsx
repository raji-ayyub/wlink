"use client"; // Add this line at the top

import './globals.css';
import { AuthProvider } from '../context/AuthContext';
// import Nav from '../components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <Nav /> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
