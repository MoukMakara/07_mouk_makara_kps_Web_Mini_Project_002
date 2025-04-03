"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutComponent = () => {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex items-center space-x-2 text-gray-500 cursor-pointer mt-auto"
      >
        {" "}
        {/* logout button */}
        <LogOut className="w-5 h-5 text-teal-400" />
        <span className="font-medium text-sm text-teal-400">Logout</span>
      </button>
    </>
  );
};

export default LogoutComponent;
