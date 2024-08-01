import { Payment } from "@/app/payments/columns";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import { setOnsuccess } from "@/store/SuccessChange";
import { useDispatch } from "react-redux";

interface Noteinter{
    id: string
    content: number
    created_at: string
    title: string
}

const useTable=async(note:Noteinter)=>{
    const dispatch=useDispatch()
    console.log(note,'checkinguserrr');
    const repsonseData=await api.delete(Constants.notes,{
        data:{
            noteId:note.id
        }
       
    })  
    dispatch(setOnsuccess()) 

 

}



async function getData(): Promise<Payment[]> {
        
    const res = await api.get(Constants.notes, {
        params: { type: "all" },
      });
      console.log(res, "checkresponsedata");
    
      return res.data.data

}
export  {useTable,getData}