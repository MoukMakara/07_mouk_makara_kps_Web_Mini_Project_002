"use server";
import { updateWorkspace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

// update new workspace
export const updateWorkspaceAction = async ({ workspaceId, workspaceName }) => {
  const res = await updateWorkspace(workspaceId, { workspaceName });
  revalidateTag("newWorkSpace");
  console.log("workspace data update: ", res);
  return res;
};
