// import CardComponent from "@/components/CardComponent";
// import FilterComponent from "@/components/FilterComponent";
// import NewTaskButton from "@/components/NewTaskButton";
// import SidebarlistComponent from "@/components/SidebarlistComponent";
// import UserAccountComponent from "@/components/UserAccountComponent";
// import React from "react";

// const HomePageComponent = () => {
//   return (
//     <div className="flex h-screen font-sf-pro">
//       <aside className="w-67 shadow-lg">
//         <SidebarlistComponent />
//       </aside>

//       <main className="flex-grow flex flex-col h-screen p-6">
//         <header className="flex justify-between items-start border-b-2 border-[#DBDDDE] pb-4 mb-6">
//           <FilterComponent />
//           <div className="flex items-center space-x-4">
//             <UserAccountComponent />
//           </div>
//         </header>

//         <div className=" bg-gray-50 p-4 rounded-lg shadow flex flex-col overflow-scroll">
//           {/* Task Headers */}
//           <div className="flex justify-between items-center gap-4 mb-6">
//             <section className="flex flex-col items-start">
//               <span className="text-red-500 font-semibold">Not Started</span>
//               <hr className="w-93 border text-red-200" />
//               {/* <CardComponent />
//               <CardComponent />
//               <CardComponent /> */}
//             </section>
//             <section className="flex flex-col items-start">
//               <span className="text-blue-500 font-semibold">In Progress</span>
//               <hr className="w-93 border text-blue-300" />
//               {/* <CardComponent />
//               <CardComponent />
//               <CardComponent /> */}
//             </section>
//             <section className="flex flex-col items-start">
//               <span className="text-teal-500 font-semibold">Finished</span>
//               <hr className="w-93 border text-teal-200" />
//               {/* <CardComponent />
//               <CardComponent />
//               <CardComponent /> */}
//             </section>
//           </div>
//           {/* Card Component Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <CardComponent />
//           </div>
//           {/* NewTaskButton positioned at the bottom-right */}
//           <div className="mt-auto self-end">
//             <NewTaskButton />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePageComponent;
