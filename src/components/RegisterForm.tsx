'use client'
import { ArrowLeft, Leaf } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion"

type propType = {
  previousStep: (s: number) => void
}

function RegisterForm({ previousStep }: propType) {
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

      {/* Heading Animation */}
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

    </div>
  )
}

export default RegisterForm