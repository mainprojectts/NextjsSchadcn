import { Constants } from "@/public/constants/constants";
import React from "react";
import { Button } from "../ui/button";
import CartRow from "./CartRow";
type Cartdata = {
  product_name: string;
  product_price: number;
  product_id:number;
  total_quantity: number;
  total_price: number;
  image: string;
};
interface CartLeftProps {
  cartData: Cartdata[];
  type: string;
  setOnsuccess:((value:boolean | ((prev: boolean)=>boolean))=>void)
}
const CartLeft: React.FC<CartLeftProps> = ({ cartData, type,setOnsuccess }) => {
  return (
    <div className={`${type === "cart" ? "w-8/12" : "w-full"} border-r p-10`}>
      <h3 className="text-xl mt-6 ">
        {type === "cart" ? "Shopping Cart" : "My Wishlist"}
      </h3>
      <hr className="mt-6 mb-6" />
      <div>
        <div  className={`w-[65%] ml-auto grid ${
          type === "cart"
            ? "grid-cols-[25%,25%,25%,25%]"
            : "grid-cols-[45%,25%,30%]"
        }  justify-around`}>
          <span>Product</span>
          <span>Price</span>
          {type === "cart" && (
            <>
              <span>Quantity</span>
              <span>Subtotal</span>
            </>
          )}
        </div>
      </div>
      <hr className="mt-6" />
      {cartData.map((value, index) => {
        return (
         <CartRow {...{index,value,type,setOnsuccess}} />
        );
      })}
    </div>
  );
};

export default CartLeft;
