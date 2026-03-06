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
                const password=credentials.password as string
                const user=await User.findOne
                if(!user){
                    throw new Error("user does not exist")
                }
                const isMatch=await bcrypt.compare(password,user.password)
                if(!isMatch){
                    throw new Error("Incorrect password")
                }
                return {
                    id:user._id,
                    email:user.email,
                    name:user.name,
                    role:user.role
                }
            } catch (error) {

                
            }
        }
    })
  ],
})