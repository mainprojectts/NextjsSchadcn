"use client"
import CartLeft from '@/components/Cart/CartLeft'
import api from '@/public/constants/api'
import { Constants } from '@/public/constants/constants'
import React, { useEffect, useState } from 'react'

type wishlistType={
    product_name:string,
    product_price:number,
    product_id:number;
    total_quantity:number,
    total_price:number,
    image:string
  }
const page = () => {
    const [wishlistData,setwishlistData]=useState<wishlistType[]>([])
    const [onSuccess,setOnsuccess]=useState<boolean>(false)

    useEffect(()=>{
        api.get(Constants.wishlist).then((res)=>{
            console.log(res)
            if(res.data.status===1){
                setwishlistData(res.data.data)
            }else{
                console.log(res)
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[onSuccess])
  return (
    <div>
            <CartLeft {...{cartData:wishlistData,type:"wishlist",setOnsuccess}} />

    </div>
  )
}

export default page
