import SidebarlistComponent from "@/components/SidebarlistComponent";
import HomePageComponent from "./_components/HomePageComponent";
import FilterComponent from "@/components/FilterComponent";
import UserAccountComponent from "@/components/UserAccountComponent";
import CardComponent from "@/components/CardComponent";
import NewTaskButton from "@/components/NewTaskButton";
import { getAllTasks } from "@/service/task.service";
import { getAllWorkspaces } from "@/service/workspace.service";

const HomePage = async () => {
  const tasks = await getAllTasks();

  const { payload } = tasks;

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
export default HomePage;
