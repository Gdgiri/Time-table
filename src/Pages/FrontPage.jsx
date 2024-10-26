import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let timeoutId;

  const handleClick = () => {
    setLoading(true);
    timeoutId = setTimeout(() => {
      navigate("/schedule");
    }, 1000);
  };

  // Cleanup function to clear the timeout if the component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-lavender p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-4xl font-bold text-rose mb-4">
            Welcome to Your Daily Schedule, Giridharan
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your daily schedule is designed to help you maintain balance and
            productivity. With a mix of dedicated work sessions, relaxation
            breaks, and time for personal growth, you're set up for success each
            day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Start your day with a clear goal in mind and let your schedule guide
            you towards achieving it step by step. Remember to stay focused,
            take breaks, and make time for self-care!
          </p>
          <div className="mt-5">
            <Button
              gradientMonochrome="pink"
              className={` text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-rosy"
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onClick={handleClick}
              disabled={loading} // Disable the button if loading
            >
              {loading ? "Navigating..." : "Go to schedule"}
            </Button>
          </div>
        </div>

        {/* Right Side - Image Content */}
        <div className="flex-1 p-5">
          <img
            src="https://github.com/user-attachments/assets/8601cf4f-e44a-4793-a671-294366f56026"
            alt="Daily Schedule Illustration"
            className="w-full h-full object-cover rounded-r-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
