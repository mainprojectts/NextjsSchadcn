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
import { Textarea } from "@/components/ui/textarea";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner"


interface Taskinter {
  title: string;
  content: string;
}

export function AddTask() {
  const [Task, setTask] = useState<Taskinter | null>(null);
  const [open, SetOpen] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setTask((prev) => {
      if (prev === null) {
        return { title: "", content: "", [id]: value };
      }
      return { ...prev, [id]: value };
    });
  };
  console.log(Task, "checkTask");

  const SubmitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (Task?.content && Task.title) {
      try {
        const response = await api.post(Constants.notes, {
          title: Task.title,
          content: Task.content,
        });
        if (response.data.status === 1) {
          SetOpen(false);
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })

        }
        console.log(response);
      } catch (error) {
        console.log(error, "Some error occured during api call");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={SetOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-20">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Create your own task. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="New Task"
              className="col-span-3"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Content
            </Label>
            {/* <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            /> */}
            <Textarea
              id="content"
              placeholder="Type your content here."
              className="col-span-3"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className=""
            onClick={(event) => {
              SubmitHandler(event);
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
