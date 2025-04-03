"use server";
import { registerService } from "@/service/auth/register.service";

export const registerAction = async (user) => {
  const res = await registerService(user);
  console.log("data", res);
  return res;
};
