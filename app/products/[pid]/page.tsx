"use client";
import ProtectedRoute from "@/components/pagecomponents/ProtectedRoute";
import { ProductfullWidth } from "@/components/Product/ProductfullWidth";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import React, { useEffect, useState } from "react";

interface Params {
  params: {
    pid: string;
  };
}
interface ProductImage {
    id: number;
    images: string;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
    status: string;
    description: string;
    brand: number;
    category: number;
    created_at: string;
    image: string;
    images: ProductImage[];
    rating: number;
    stock:number;
  }
  
export default function page({ params: { pid } }: Params) {
  console.log(pid);
  const [Products,SetProducts]=useState<Product>()

  useEffect(() => {
    api
      .get(Constants.products, {
        params: {
          type: "single",
          id: pid,
        },
      })
      .then((res) => {
        if(res.data.status===2){
            SetProducts(res.data.data)
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(Products,'checkproductss');
  
  return (
    <ProtectedRoute>
      {Products && <ProductfullWidth {...{Products}} />}
    </ProtectedRoute>
  );
}
