import React, { useState } from "react";
import { Button } from "../ui/button";
import { Constants } from "@/public/constants/constants";
import api from "@/public/constants/api";
import { toast } from "sonner";
import { AlertDialogDemo } from "../Shadcn/AlertDialog";
import { AlertDialogtwo } from "../Shadcn/AlertDialogtwo";

type Cartdata = {
  product_name: string;
  product_price: number;
  product_id: number;
  total_quantity: number;
  total_price: number;
  image: string;
};
interface props {
  index: number;
  value: Cartdata;
  type: string;
  setOnsuccess: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const CartRow = ({ index, value, type, setOnsuccess }: props) => {
  const [open, setOpen] = useState(false);

  const handleAddtocart = () => {
    toast.dismiss();
    api
      .post(Constants.cart, {
        cart_product: value.product_id,
        quantity: 1,
      })
      .then((res) => {
        if (res.data.status === 1) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Some Error Occured !");
        }
      });
  };
  const handleDelete = () => {
    toast.dismiss();
    if (type === "cart") {
      api
        .delete(Constants.cart, {
          params: {
            product: value.product_id,
          },
        })
        .then((res) => {
          if (res.data.status === 1) {
            toast.success(res.data.message);
            setOnsuccess((prev) => !prev);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Some Error Occured !");
          }
        });
    } else {
      api
        .delete(Constants.wishlist, {
          params: { product: value.product_id },
        })
        .then((res) => {
          if (res.data.status === 1) {
            toast.success(res.data.message);
            setOnsuccess((prev) => !prev);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Some Error Occured !");
          }
        });
    }
  };
  const deletbutton: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
  return (
    <div
      key={index}
      className="h-[200px] border-b flex items-center justify-around"
    >
      <div className="w-[35%] flex items-center justify-around ">
        <span>
          <AlertDialogtwo
            button={deletbutton}
            title={"Are you sure to delete ?"}
            content={`This will remove the product from the ${type==="cart"?"cart":"whishlist"}`}
            onOk={handleDelete}
          />
        </span>
        <img
          src={`${Constants.PORT}/${value.image}`}
          alt=""
          className="h-[150px]"
        />
      </div>

      <div
        className={`w-[65%] ml-auto grid ${
          type === "cart"
            ? "grid-cols-[25%,25%,25%,25%]"
            : "grid-cols-[45%,25%,30%]"
        }  justify-around`}
      >
        {" "}
        <span className="text-xs sm:text-sm md:text-base lg:text-lg">
          {value.product_name}
        </span>
        <span className="text-xs sm:text-sm md:text-base lg:text-lg">
          {value.product_price}
        </span>
        {type === "cart" && (
          <>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              {value.total_quantity}
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              {value.total_price}
            </span>
          </>
        )}
        {type === "wishlist" && (
          <>
            <Button
              onClick={() => {
                handleAddtocart();
              }}
            >
              Add to Cart
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartRow;
