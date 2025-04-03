import React from "react";
import { Bell } from "lucide-react";
import { getUserService } from "@/service/user/user.service";

const UserAccountComponent = async () => {
  const userData = await getUserService();
  const { payload } = userData;
  return (
    <div className="flex items-center space-x-4">
      <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />
      <div className="flex items-center space-x-2">
        <img
          src={
            payload.profile ??
            "https://i.pinimg.com/736x/35/f3/d7/35f3d744998a14c9b2f1ebd0146b384e.jpg"
          }
          alt={payload.unsername ?? "unknown profile"}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-black">
            {payload.username ?? "unkown username"}
          </span>
          <span className="text-sm text-blue-400">
            {payload.email ?? "unkown email"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserAccountComponent;
