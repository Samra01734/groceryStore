'use client'
import { ArrowLeft, Leaf, Mail, User, Lock, EyeOff, Eye, GoalIcon, LogIn } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'

//import googleImage from "../../google.jpg"
type propType = {
  previousStep: (s: number) => void
}

function RegisterForm({ previousStep }: propType) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const isFormValid = name.trim() !== "" && email.trim() !== "" && password.trim() !== ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!isFormValid) return
    console.log({ name, email, password })
    alert(`Registered!\nName: ${name}\nEmail: ${email}`)
    // Yahan API call kar sakte ho
  }
   const handleRegister=async(e:React.FormEvent)=>{
   e.preventDefault()
    try {
      const result =await axios.post("/api/auth/register",{
        name,email,password
      })
   console.log(result.data)
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative">

      {/* Back Button */}
      <div
        className="absolute top-6 left-6 flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors cursor-pointer"
        onClick={() => previousStep(1)}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-green-700"
      >
        Create account
      </motion.h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-8 flex items-center gap-2">
        Join Snapcart today
        <Leaf className="w-5 h-5 text-green-400" />
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 w-full max-w-md"
        onSubmit={handleSubmit}
      >

        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"/>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"/>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"/>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-10 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOff
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={!isFormValid}
          className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${
            isFormValid
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Register
        </button>

        <div className='flex items-center gap-2 text-gray-400 text-sm mt-2'>
          <span className='flex-1  h-px bg-gray-200'></span>
          OR
          <span className='flex-1  h-px bg-gray-200'></span>
        </div>
        <button className='w-full flex items-center justify-center gap-3 border border-gray-300
         hover:bg-gray-50
        py-3 rounded-xl text-gray-700 font-medium transition-all duration-200'>
      {/* <Image src={googleImage}  width={20} height={20} alt="google" /> */}
      <FcGoogle  size={26}  />
      Countinue with google
        </button>

      </motion.form>

      <p className='text-gray-600 mt-6 text-sm flex items-center gap-1 cursor-pointer'>
     Already have an accont? <LogIn className='e-4 h-4'/>
     <span className='text-green-600'>SignIn</span>
      </p>
    </div>
  )
}

export default RegisterForm