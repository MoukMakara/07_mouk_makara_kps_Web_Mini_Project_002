import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import NewTaskButton from "./NewTaskButton";

const CardComponent = ({ tasks = [] }) => {
  // Group tasks by status
  const notStartedTasks = tasks.filter((task) => task.status === "NOT_STARTED");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const finishedTasks = tasks.filter((task) => task.status === "FINISHED");

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col overflow-scroll">
      {/* Task Headers */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <section className="flex flex-col items-start">
          <span className="text-red-500 font-semibold">NOT_STARTED</span>
          <hr className="w-full border border-red-200" />
        </section>
        <section className="flex flex-col items-start">
          <span className="text-blue-500 font-semibold">IN_PROGRESS</span>
          <hr className="w-full border border-blue-300" />
        </section>
        <section className="flex flex-col items-start">
          <span className="text-teal-500 font-semibold">FINISHED</span>
          <hr className="w-full border border-teal-200" />
        </section>
      </div>

      {/* Task Columns */}
      <div className="flex gap-6">
        {/* NOT_STARTED Column */}
        <div className="flex flex-col gap-4 w-1/3">
          {notStartedTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>

        {/* IN_PROGRESS Column */}
        <div className="flex flex-col gap-4 w-1/3">
          {inProgressTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>

        {/* FINISHED Column */}
        <div className="flex flex-col gap-4 w-1/3">
          {finishedTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>

      {/* NewTaskButton positioned at the bottom-right */}
      <div className="mt-auto self-end">
        <NewTaskButton />
      </div>
    </div>
  );
};

// Task Card Component
const TaskCard = ({ task }) => {
  return (
    <div className="border w-[370px] border-gray-300 rounded-xl">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* Task details */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* Tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {task.tag}
          </p>

          {/* Status Indicator */}
          <div
            className={`rounded-full w-8 h-8 ${
              task.status === "NOT_STARTED"
                ? "bg-red-500"
                : task.status === "IN_PROGRESS"
                ? "bg-blue-500"
                : "bg-teal-500"
            }`}
          ></div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-40 truncate ${
              task.status === "NOT_STARTED"
                ? "border-red-500 text-red-500"
                : task.status === "IN_PROGRESS"
                ? "border-blue-500 text-blue-500"
                : "border-teal-500 text-teal-500"
            }`}
          >
            <SelectValue placeholder={task.status} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* Date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> Mar 23, 2025
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
