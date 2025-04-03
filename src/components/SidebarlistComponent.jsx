import React from "react";
import { Plus, Star, MoreHorizontal, LogOut } from "lucide-react";
import { getAllWorkspaces } from "@/service/workspace.service";
import { CreateWorkSpaceComponent } from "./CreateWorkSpaceComponent";
import { UpdateWorkSpaceComponent } from "./UpdateWorkSpaceComponent";
import LogoutComponent from "./LogoutComponent";
// Random color
const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-orange-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const SidebarlistComponent = async () => {
  const workspaces = await getAllWorkspaces();
  const { payload } = workspaces;

  // Filter favorite workspaces
  const favoriteWorkspaces = payload.filter(
    (workspace) => workspace.isFavorite
  );

  return (
    <div className="w-65 p-4 flex flex-col justify-between ">
      <div className="flex-grow">
        {/* logo */}
        <div className="container ml-16 my-12">
          <h1 className="text-5xl font-bold ">
            Plan<span className="text-watermelon-red">I</span>t
          </h1>
        </div>
        {/* Workspace */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-400 font-bold">Workspace</h2>
            {/* Modal toggle */}
            <CreateWorkSpaceComponent />
            {/*  */}
          </div>
          {payload.map((workspace) => (
            <div
              key={workspace.workspaceId}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${getRandomColor()}`}
                ></div>
                <span className="font-medium text-sm">
                  {workspace.workspaceName}
                </span>
              </div>
              {/* update workspace */}
              <UpdateWorkSpaceComponent workspace={workspace.workspaceId} />
            </div>
          ))}
        </div>

        {/* Favorite */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-400 font-bold">Favorite</h2>
            <Star className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          {favoriteWorkspaces.map((favorite, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${getRandomColor()}`}
                ></div>
                <span className="font-medium text-sm">
                  {favorite.workspaceName}
                </span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <LogoutComponent />
    </div>
  );
};

export default SidebarlistComponent;
