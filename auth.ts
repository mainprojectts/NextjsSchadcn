import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { Constants } from "./public/constants/constants"
import axios from "axios"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async jwt({ token, account, profile }) {
      // If this is the initial sign-in after Google login
     console.log(account,'checkaccountttt')
     if(account?.provider==="google"){
      try{
        const response=await axios.post(`${Constants.PORT}/${Constants.googlelogin}/`,{
          id_token:account?.id_token
        })
        token.access=await response.data.access
        token.refresh=await response.data.refresh
        console.log(response.data.refresh,'checktokenresponse')
      }catch(error){
        console.log("error of google login",error)
      }
    
     }

      return token;
    },
    async session({ session, token }) {
      // Attach token data to the session
        // Attach token data to the session object
        console.log(token,"tokennnnnnnnn")
        console.log(session,"sessionnnnn")
    session["accessToken"] = await token

    
      return session;
    },
    
  },
})