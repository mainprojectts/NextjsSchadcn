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
     console.log(account,profile,token,'checkaccountttts')
     if(account&&account?.provider==="google"){
      try{
        const response=await axios.post(`${Constants.PORT}/${Constants.googlelogin}/`,{
          id_token:account?.id_token
        })
        token.access=await response.data.access || null
        token.refresh=await response.data.refresh || null
        console.log(response,'checktokenresponse2')
      }catch(error){
        console.log("error of google login",error)
      }
    
     }
     if(account&&account?.provider==="github"){
      console.log(token.email,account.access_token,'checkkkdkdkdkkdk')
      try{
        const response=await axios.post(`${Constants.PORT}/${Constants.githublogin}/`,{
          email:token?.email,
          access_token:account?.access_token
        })
        token.access=await response.data.access || null
        token.refresh=await response.data.refresh || null
        // console.log(response,'checktokenresponse2')
      }catch(error){
        // console.log("error of google login",error)
      }
    
     }
  
      return token;
    },
    async session({ session, token }) {
      // Attach token data to the session
        // Attach token data to the session object
      
        if(token){
          session["accessToken"] = await token
        }
        // console.log(token,"tokennnnnnnnn")
        // console.log(session,"sessionnnnn")
 

    
      return session;
    },
    
  },
})