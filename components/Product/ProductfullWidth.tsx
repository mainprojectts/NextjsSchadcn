import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Constants } from "@/public/constants/constants";

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
}
interface ProductProps {
  Products: Product;
}
export function ProductfullWidth({ Products }: ProductProps) {
  const images = Products.images;
  const carouselRef=React.useRef()
  const [selectedImage, setSelectedImages] = React.useState(images[0]);
  const handleImageClick = (image) => {
    setSelectedImages(image);
  };

  const setSelectedImage=()=>{
    console.log(carouselRef.current,'checkCarouselref');
    
  }

  console.log(images, "checksingleproduct");
  return (
    <div className="w-10/12 mx-auto h-auto">
      <div>
      <Carousel ref={carouselRef} className="w-1/2">
      <CarouselContent>
        {/* {images.map((value, index) => ( */}
          <CarouselItem key={1}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect- square items-center justify-center p-6">
                <img src={`${Constants.PORT}${selectedImage.images}`} alt="image" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        {/* ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        <div className="flex mt-5 mb-5">
          <Carousel className="w-1/2 ">
            <CarouselContent className="-ml-1">
              {images.map((value, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/5 lg:basis-1/5"
                    onClick={() => handleImageClick(value)}

                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={`${Constants.PORT}${value.images}`}
                            width={100}
                            height={100}
                            alt="image"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
