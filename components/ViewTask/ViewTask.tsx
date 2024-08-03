import { getColumn, Payment } from "@/app/payments/columns";
import { DataTable } from "@/app/payments/data-table";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import { useEffect, useState } from "react";
import { getData } from "../useTable/useTable";
import { useDispatch, useSelector } from "react-redux";
import { setOnsuccess } from "@/store/SuccessChange";

interface RootState {
    success: {
        value: any; // Replace 'any' with the actual type of value
    };
    // Other slices...
}

export default function ViewTask() {
  const [data, SetData] = useState<Payment[]>([]);
  const onSuccess = useSelector((state: RootState) => state.success.value);
  console.log(onSuccess,'checkReduxdata');
  const dispatch=useDispatch()
  useEffect(() => {
    const FetchData = async () => {
      const responseData = await getData();
      SetData(responseData);
    };
    FetchData();
  }, [onSuccess]);
  const SetChange=()=>{
    dispatch(setOnsuccess())
  }

const columns=getColumn(SetChange)
  return (
    <div className="container mx-auto p-20">
      <DataTable columns={columns} data={data} setChange={SetChange} />
    </div>
  );
}
