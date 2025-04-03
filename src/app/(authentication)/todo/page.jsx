// app/todo/page.jsx
import { redirect } from "next/navigation";

const HomePage = () => {
  const defaultWorkspaceId = "default-workspace-id";

  redirect(`/todo/${defaultWorkspaceId}`);
};

export default HomePage;
