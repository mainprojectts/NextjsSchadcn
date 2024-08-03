import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <>
      <div className="flex flex-col space-y-3 items-center p-20">
        <div className="space-y-2 w-full" >
          <div className="flex pt-5 pb-5">
            <Skeleton className="h-10 w-[380px] rounded-xl" />
            <Skeleton className="h-10 w-[100px] rounded-xl ml-20" />
            <Skeleton className="h-10 w-[100px] rounded-xl ml-auto" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
