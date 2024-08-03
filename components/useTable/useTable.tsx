import { Payment } from "@/app/payments/columns";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import { setOnsuccess } from "@/store/SuccessChange";
import { toast } from "sonner";

interface Noteinter{
    id: string
    content: number
    created_at: string
    title: string
}
type setChangeType=()=>void
const useTable = async (note: Noteinter, setChange: setChangeType): Promise<void> => {
    console.log(note,'checkinguserrr');
    const repsonseData=await api.delete(Constants.notes,{
        data:{
            noteId:note.id
        }
       
    })  
    if(repsonseData.data.status===1){
        setChange()
        toast.dismiss()
        toast(repsonseData.data.message)

    }
    console.log(repsonseData.data.message,'checkresposedat');
    

 

}



async function getData(): Promise<Payment[]> {
        
    const res = await api.get(Constants.notes, {
        params: { type: "all" },
      });
      console.log(res, "checkresponsedata");
    
      return res.data.data

}
export  {useTable,getData}