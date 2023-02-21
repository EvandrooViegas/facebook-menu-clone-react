import React from 'react'

interface IProps {
    children: React.ReactNode
}
export default function Navbar({ children }:IProps) {
  return (
    <div className='flex justify-start gap-7 p-5 bg-neutral-800 text-white font-semibold text-3xl'>
        {children}
    </div>
  )
}
