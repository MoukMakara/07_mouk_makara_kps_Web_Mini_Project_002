"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import addWorkSpace from "../../public/addWorkSpace.svg";
import { useForm } from "react-hook-form";
import { createWorkspaceAction } from "@/action/createWorkspaceAction";
import { createTaskAction } from "@/action/createTaskAction";

export function CreateTaskComponent() {
  const { handleSubmit, reset, register } = useForm();
  const handleName = async (data) => {
    createTaskAction(data);
    console.log("name: ", data.workspaceName);
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="">
          <Image
            className="w-5 h-5  cursor-pointer"
            src={addWorkSpace}
            alt=""
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleName)}>
          <div className="grid py-4">
            <div className="grid gap-2">
              <Label htmlFor="taskTitle" className="mb-1">
                task Title
              </Label>
              <Input
                id="taskTitle"
                className="w-full"
                {...register("taskTitle")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="taskDetails" className="mb-1">
                taskDetails
              </Label>
              <Input
                id="taskDetails"
                className="w-full"
                {...register("taskDetails")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tag" className="mb-1">
                tag
              </Label>
              <Input id="tag" className="w-full" {...register("tag")} />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="cursor-pointer text-white bg-gray-600"
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
