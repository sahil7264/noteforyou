import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import NotesPage from "./pages/NotesPage";
import DeveloperPage from "./pages/DeveloperPage";
import Layout from "./components/Layout";
const App = () => {
  return (
    <div className="h-[100vh] font-semibold relative">
      <h1 className="text-4xl w-full text-center fixed border-b-2 p-3 z-1 bg-violet-200 border-b-1 shadow-xl">
        Cp Notes
      </h1>
      <div className="flex border-b h-[100vh]">
        <div className="mt-[56px] w-[20%] border-2">
          <Layout></Layout>
        </div>
        <div className="mt-[52px] p-8 w-full">
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/about" element={<DeveloperPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
