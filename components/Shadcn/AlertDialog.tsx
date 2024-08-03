import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Noteinter{
    id: string
    content: number
    created_at: string
    title: string
}
type setChangeType=()=>void

interface AlertDialogDemoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: Noteinter;
  setChange : () => void;
  useTable: (note: Noteinter, setChange: setChangeType) => void;
}
export function AlertDialogDemo({
  open,
  setOpen,
  user,
  setChange,
  useTable,
}: AlertDialogDemoProps) {
  return (
    <AlertDialog onOpenChange={setOpen} open={open} defaultOpen>
      {/* <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete
           this task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              useTable(user, setChange);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
