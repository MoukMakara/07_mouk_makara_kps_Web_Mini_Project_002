// app/todo/[workspaceId]
import SidebarlistComponent from "@/components/SidebarlistComponent";
import FilterComponent from "@/components/FilterComponent";
import UserAccountComponent from "@/components/UserAccountComponent";
import CardComponent from "@/components/CardComponent";
import { getAllTasks } from "@/service/task.service";

const WorkspaceId = async ({ params }) => {
  const { workspaceId } = params;
  const tasks = await getAllTasks(workspaceId);
  console.log("get all tasks", tasks);

  const { payload } = tasks || {};

  return (
    <div className="flex h-screen font-sf-pro">
      <aside className="w-67 shadow-lg">
        <SidebarlistComponent />
      </aside>

      <main className="flex-grow flex flex-col h-screen p-6">
        <header className="flex justify-between items-start border-b-2 border-[#DBDDDE] pb-4 mb-6">
          <FilterComponent />
          <div className="flex items-center space-x-4">
            <UserAccountComponent />
          </div>
        </header>
        {/* CardComponent */}
        <CardComponent tasks={payload} />
      </main>
    </div>
  );
};
export default WorkspaceId;
