import { columns, Payment } from "@/app/payments/columns";
import { DataTable } from "@/app/payments/data-table";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import { useEffect, useState } from "react";
import { getData } from "../useTable/useTable";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    const FetchData = async () => {
      const responseData = await getData();
      SetData(responseData);
    };
    FetchData();
  }, [onSuccess]);

  return (
    <div className="container mx-auto p-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
