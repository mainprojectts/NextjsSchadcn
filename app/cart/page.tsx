"use client"
import CartLeft from "@/components/Cart/CartLeft";
import CartRight from "@/components/Cart/CartRight";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import React, { useEffect, useState } from "react";

type Cartdata={
  product_name:string,
  product_price:number,
  product_id:number,
  total_quantity:number,
  total_price:number,
  image:string
}
export default function page() {
  const [cartData,setCartData]=useState<Cartdata[]>([])
  const [onSuccess,setOnsuccess]=useState<boolean>(false)


  useEffect(()=>{

    api.get(Constants.cart).then((res)=>{
      if(res.data.status===1){
        console.log(res.data);
        setCartData(res.data.data)
      }else{
        console.log(res.data)
      }
    }).catch((error)=>{
      console.log(error)
    })

  },[onSuccess])

  return (
    <div className="container flex">
      <CartLeft {...{cartData,type:"cart",setOnsuccess}} />
      <CartRight />
    </div>
  );
}
