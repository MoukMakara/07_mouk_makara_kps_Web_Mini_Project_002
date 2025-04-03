"use client";
import React, { useState } from "react";
const FormCreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workspace Name:", workspaceName);
  };

  return (
    <main>
      <div className="space-y-6 w-1/3 mx-auto bg-white drop-shadow-light-steel-blue p-12 rounded-3xl">
        <h1 className="font-bold text-3xl text-center">Create Workspace</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workspace Name
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-watermelon-red"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-watermelon-red text-white py-2 rounded-lg font-bold hover:bg-red-500 transition"
          >
            Create
          </button>
        </form>
        <p className="text-center text-light-steel-blue">
          &copy; Copyright | 2025 Monster
        </p>
      </div>
    </main>
  );
};

export default FormCreateWorkspace;
