import headerToken from "@/app/api/headerToken";

export const getAllTasks = async (
  workspaceId = "260d385c-84f7-47df-9a85-5b7c26d21cad",
  pageNo = 0,
  pageSize = 10,
  sortBy = "taskId",
  sortDirection = "ASC"
) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/tasks/workspace/${workspaceId}?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        method: "GET",
        headers: header,
      }
    );
    const data = await response.json();

    console.log("data of tasks: ", data);

    return data;
  } catch (err) {
    console.log("tasks error: ", err);
  }
};

// create new task under a specified workspace
export const createTask = async (workspaceId, task) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/tasks/workspace/${workspaceId}`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: header,
        next: { tags: ["newTask"] },
      }
    );
    const data = await response.json();

    console.log("data of created task: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("Error creating task: ", err);
  }
};

// update task by taskId and workspaceId

export const updateTask = async (workspaceId, taskId, updatedTask) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/tasks/workspace/${workspaceId}/${taskId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: header,
        next: { tags: ["updatedTask"] },
      }
    );
    const data = await response.json();

    console.log("data of updated task: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("Error updating task: ", err);
  }
};

// delete task by taskId and workspaceId

export const deleteTask = async (workspaceId, taskId) => {
  try {
    const header = await headerToken();
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/tasks/workspace/${workspaceId}/${taskId}`,
      {
        method: "DELETE",
        headers: header,
        next: { tags: ["deletedTask"] },
      }
    );
    const data = await response.json();

    console.log("data of deleted task: ", data.payload);

    return data.payload;
  } catch (err) {
    console.log("Error deleting task: ", err);
  }
};
