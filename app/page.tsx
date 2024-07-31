"use client";
import ProtectedRoute from "@/components/pagecomponents/ProtectedRoute";
// import { resolve } from "path";
// import { useEffect } from "react";
import Home from "./../components/Home/Home"

export default function Page() {
  // function WalkDog() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(`You walk the dog 🐕`);
  //     }, 1500);
  //   });
  // }

  // function CleanKitchen() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(`You clean the kitchen 🧹`);
  //     }, 2500);
  //   });
  // }
  // function takeOutTrash() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(`You take out the trash ♻`);
  //     }, 500);
  //   });
  // }

  // useEffect(() => {
  //   WalkDog()
  //     .then((value) => {
  //       console.log(value);
  //       return CleanKitchen();
  //     })
  //     .then((value) => {
  //       console.log(value);
  //       return takeOutTrash();
  //     })
  //     .then((value) => {
  //       console.log(value);
  //       console.log(`You finished all the chores`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //async/await

  // useEffect(() => {
  //   async function Dochores() {
  //     const walkDogresult = await WalkDog();
  //     console.log(walkDogresult);
  //     const cleanKitchenResult = await CleanKitchen();
  //     console.log(cleanKitchenResult);
  //     const takeOutTrashresult = await takeOutTrash();
  //     console.log(takeOutTrashresult);
  //   }
  //   Dochores();
  // }, []);

  return <ProtectedRoute>
    <Home/>
  </ProtectedRoute>
}
