import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Styles from "@/public/styles/global.module.css";
import { Button } from "@/components/ui/button"

const CartRight = () => {
  return (
    <div className="w-4/12 p-10 h-[90vh]">
      {" "}
      <h3 className="text-xl mt-6 ">Cart Total</h3>
      <hr className="mt-6 mb-6" />
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>$45.00</span>
      </div>
      <hr className="mt-6 mb-6 " />
      <div className="flex justify-between">
        <span className="mt-auto mb-auto" >Shipping</span>
        <div>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2 justify-end ">
              <Label className="text-xs" htmlFor="r1">
                Cash on devilery
              </Label>
              <RadioGroupItem value="default" id="r1" />
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Label className="text-xs" htmlFor="r2">
                Fast delivery:$10.00
              </Label>
              <RadioGroupItem value="comfortable" id="r2" />
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Label className="text-xs" htmlFor="r3">
                Online
              </Label>
              <RadioGroupItem value="compact" id="r3" />
            </div>
          </RadioGroup>
          <span className={Styles.smalltext}>
            Shipping option will be updated during checkout.
          </span>
        </div>
      </div>
      <hr className="mt-6 mb-6" />
      <div className="flex justify-between">
        <span>Total</span>
        <span>$45.00</span>
      </div>
      <Button className="w-full mt-8" >Proceed to checkout</Button>
    </div>
  );
};

export default CartRight;
