import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/service/constants";

// Get current user information
export const getUserService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/user`, {
      headers: header,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
