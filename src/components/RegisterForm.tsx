import { ArrowLeft } from 'lucide-react'
import React from 'react'

function RegisterForm() {
  return (
    <div className='flex felx-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
      <div className=' absolute top-6 left-6 fex-items items-center  gap-2  text-green-700 hover-text-green-900 transition-colors cursor-pointer '>
        <ArrowLeft className='w-5 h-5'/>
        <span>Back</span>
      </div>
    </div>
  )
}

export default RegisterForm
