"use server";
import { createWorkspace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

// create new workspace
export const createWorkspaceAction = async (workspace) => {
  const res = await createWorkspace(workspace);
  revalidateTag("newWorkSpace");
  console.log("workspace data", res);
  return res;
};
