import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-gray-100 py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold font-manrope mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <Link
            to="/"
            className="bg-theme-green text-white px-6 py-2 rounded-md hover:bg-theme-green/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
