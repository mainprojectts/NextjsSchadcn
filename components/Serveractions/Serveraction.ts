// serverActions.ts
"use server";

import { signIn,auth,signOut } from "@/auth";

export async function googleSignIn() {
  const session=await auth()
 
  await signIn("google");
  // return session
  
}
export async function gitHubsignin() {
  const session=await auth()
 
  await signIn("github");
  // return session
  
}
export async function authsign(){
    const session=await auth()
    return session
}


export async function authsignout(){
  await signOut()
}