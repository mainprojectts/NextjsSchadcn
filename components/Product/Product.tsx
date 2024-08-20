"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import api from "@/public/constants/api";
import { Constants } from "@/public/constants/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  rating:number;
  id:number;
}

export function ProductCard() {
  const [Products, setProducts] = useState<Product[]>([]);
  const router=useRouter()

  useEffect(() => {
    api
      .get(Constants.products,{
       params:{
        type:"all"
       }
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          setProducts(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(Products, "checkProducts");

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-lg mx-auto mt-28"
    >
      <CarouselContent>
      {Products?.map((value, index) => {
  console.log(value.image);

  const renderStars = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? "orange" : "none"}
          viewBox="0 0 24 24"
        //   strokeWidth={1.2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <CarouselItem
      key={index}
      className={`md:basis-1/2 lg:basis-1/3 pl-10 pr-10`}
    >
      <div className="p-1">
        <Card onClick={()=>{
          router.push(`products/${value.id}`)
        }}>
          <CardContent
            className="flex flex-col aspect-square items-center justify-center p-6"
            style={{ aspectRatio: "1.8/3" }}
          >
            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
            {value?.image && (
              <div className=" basis-1/2">
                <Image
                  src={`${Constants.PORT}${value?.image}`}
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            )}
            <h4 className="text-2xl">{value.name}</h4>
            <p>{value.description}</p>
            <p className="mt-2 mb-2 text-green-700">{value.price}$</p>
            <div className="flex">
              {renderStars(value.rating)}
            </div>
            <Button className="mt-auto w-full bg-blue-400 ">Add To Cart</Button>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
