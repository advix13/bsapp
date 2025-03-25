import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueSpring Dashboard",
  description: "Water and ice distribution management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-100">
          {/* Simple sidebar */}
          <div className="w-64 bg-blue-800 text-white p-4 hidden md:block">
            <h1 className="text-xl font-bold mb-6">BlueSpring</h1>
            <nav className="space-y-2">
              <a href="/" className="block py-2 px-4 rounded hover:bg-blue-700">Dashboard</a>
              <a href="/inventory" className="block py-2 px-4 rounded hover:bg-blue-700">Inventory</a>
              <a href="/orders" className="block py-2 px-4 rounded hover:bg-blue-700">Orders</a>
              <a href="/customers" className="block py-2 px-4 rounded hover:bg-blue-700">Customers</a>
              <a href="/reports" className="block py-2 px-4 rounded hover:bg-blue-700">Reports</a>
            </nav>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Simple header */}
            <header className="bg-white shadow-sm h-16 flex items-center px-6">
              <div className="md:hidden">
                <button className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="text-sm text-gray-600">Welcome, Admin</span>
              </div>
            </header>
            
            {/* Page content */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
