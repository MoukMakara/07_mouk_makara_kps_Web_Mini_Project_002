// get all workspaces

import headerToken from "@/app/api/headerToken";

export const getAllWorkspaces = async (
  pageNo = 0,
  pageSize = 10,
  sortBy = "workspaceId",
  sortDirection = "ASC"
) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/workspaces?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        method: "GET",
        headers: header,
      }
    );
    const data = await response.json();

    // console.log("data of workspace: ", data);

    return data;
  } catch (err) {
    console.log("workspaces error: ", err);
  }
};

// Create New Workspace
export const createWorkspace = async (workspace) => {
  try {
    const header = await headerToken();
    const response = await fetch(`${process.env.NEXT_APIURL}/workspace`, {
      method: "POST",
      body: JSON.stringify(workspace),
      headers: header,
      next: { tags: ["newWorkSpace"] },
    });
    const data = await response.json();
    console.log("workspace payload: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("workspace error: ", err);
  }
};
// update workspace by workspace-id
export const updateWorkspace = async (workspaceId, workspace) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXT_APIURL}/workspace/${workspaceId}`,
      {
        method: "PUT",
        body: JSON.stringify(workspace),
        headers: header,
        next: { tags: ["newWorkSpace"] },
      }
    );
    const data = await response.json();
    console.log("workspace payload: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("workspace error: ", err);
  }
};
// get workspace by workspace-id
export const getWorkspaceById = async (workspaceId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_APIURL}/workspace/${workspaceId}`
    );
    const data = await response.json();
    console.log("workspace payload: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("workspace error: ", err);
  }
};
