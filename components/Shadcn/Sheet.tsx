"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "../ui/textarea";
import React, { useState } from "react";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import { toast } from "sonner";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

type taskType = {
  title: string;
  content: string;
};
type setChangeType = () => void;

interface SheetSideProps {
  setChange: setChangeType;
}

export function SheetSide({ setChange }: SheetSideProps) {
  const [Task, setTask] = useState<taskType>({
    title: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [id]: value,
    }));
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const responseData = await api.post(Constants.notes, {
        title: Task.title,
        content: Task.content,
      });
      if (responseData.data.status === 1) {
        setChange();
        toast(responseData.data.message);
      } else {
        toast(responseData.data.message);
      }
      console.log(responseData);
    } catch (error) {
      toast("Some Error Occured");
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 ml-20">
      {/* {SHEET_SIDES.map((side) => ( */}
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <Button variant="outline">{"Add Task"}</Button>
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle>Add Task</SheetTitle>
            <SheetDescription>
              Create your own task. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                onChange={handleChange}
                value={Task?.title}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Content
              </Label>
              <Textarea
                className="col-span-3"
                id="content"
                onChange={handleChange}
                value={Task.content}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={handleSubmit} type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* ))} */}
    </div>
  );
}
