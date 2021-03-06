import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import Signup from './pages/Signup';

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const sideBar = () => {
    if (showSideBar) {
      return (
        <div className="flex flex-row">
          <Sidebar />
          <button
            className="absolute left-4 top-4 cursor-pointer"
            onClick={toggleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="absolute left-4 top-4 cursor-pointer"
          onClick={toggleSideBar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <Router key="router">
      <div className="container h-screen w-screen bg-sky-50 overflow-auto">
        <Header />
        <div className="">{sideBar()}</div>
        <div className=" container ml-20 ">
          <Routes key="routes">
            <Route path="/" element={<Home />} key="home" />
            <Route path="/analysis" element={<Analysis />} key="analysis" />
            <Route path="/contact" element={<Contact />} key="contact" />
            <Route
              path="/privacy"
              element={<Privacy />}
              key="privacyAgreement"
            />

            {/* <Router path="/signup" element={<Signup />} key="signup" /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
