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
import updateWorkSpace from "../../public/updateWorkSpace.svg";
import { useForm } from "react-hook-form";
import { updateWorkspaceAction } from "@/action/updateWorkspaceAction";

export function UpdateWorkSpaceComponent({ workspace }) {
  const { handleSubmit, reset, register } = useForm();
  const handleName = async (data) => {
    console.log("after update workspace name:", data.workspaceName);

    updateWorkspaceAction({
      workspaceId: workspace.id,
      workspaceName: data.workspaceName,
    });
    console.log("Updated workspace name: ", data.workspaceName);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="">
          <Image
            className="w-5 h-5 cursor-pointer"
            src={updateWorkSpace}
            alt=""
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Update New Workspace</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleName)}>
          <div className="grid py-4">
            <div className="grid gap-2">
              <Label htmlFor="workspaceName" className="mb-1">
                Workspace Name
              </Label>
              <Input
                id="workspaceName"
                className="w-full"
                {...register("workspaceName")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="cursor-pointer text-white bg-gray-600"
            >
              Update
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
