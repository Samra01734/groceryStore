import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import User from "./models/user.model"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials:{
            email:{label:"email",type:"email"},
            password:{label:"password" ,type:"password"},

        },
        authorize(credentials,request){
            try {
                await connectDb()
                const email=credentials.email
                const password=credentials.password
                const user=await User.findOne
            } catch (error) {
                
            }
        }
    })
  ],
})