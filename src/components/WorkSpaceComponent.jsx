"use client";
import React from "react";
import { UpdateWorkSpaceComponent } from "./UpdateWorkSpaceComponent";
import { getAllWorkspaces } from "@/service/workspace.service";
import { CreateWorkSpaceComponent } from "./CreateWorkSpaceComponent";
import { MoreHorizontal, Star } from "lucide-react";
import { useRouter } from "next/navigation";
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
const WorkSpaceComponent = ({ workspaces }) => {
  const router = useRouter();
  const handleWorkspaceId = (workspaceId) => {
    router.push(`/todo/${workspaceId}`);
  };

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-gray-400 font-bold">Workspace</h2>
          {/* Modal toggle */}
          <CreateWorkSpaceComponent />
          {/*  */}
        </div>
        {workspaces.map((workspace) => (
          <div
            key={workspace.workspaceId}
            onClick={() => handleWorkspaceId(workspace.workspaceId)}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${getRandomColor()}`}></div>
              <span className="font-medium text-sm">
                {workspace.workspaceName}
              </span>
            </div>
            {/* update workspace */}
            <UpdateWorkSpaceComponent workspace={workspace.workspaceId} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkSpaceComponent;
