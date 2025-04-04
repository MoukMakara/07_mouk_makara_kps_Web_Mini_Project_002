"use server";

import { createTask } from "@/service/task.service";

// action create a new task with workspaceId
export const createTaskAction = async (workspaceId, task) => {
  const res = await createTask(workspaceId, task);
  console.log("crate task data", res);
  return res;
};
