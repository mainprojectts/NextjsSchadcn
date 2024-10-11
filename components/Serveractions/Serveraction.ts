// serverActions.ts
"use server";

import { signIn,auth,signOut } from "@/auth";

export async function googleSignIn() {
  await signIn("google");
}
export async function authsign(){
    const session=await auth()
}