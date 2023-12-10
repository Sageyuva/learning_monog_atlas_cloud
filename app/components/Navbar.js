import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <center>
        
    <nav className='w-[90%] flex items-center justify-between mt-4 bg-slate-600 p-3 rounded-md text-white'>
        <Link className='ml-5 p-2 font-bold text-xl' href='/'>SageCoding</Link>
        <Link className='mr-5 p-2 bg-green-500 rounded' href='/addTopic'>AddTopic</Link>
    </nav>
    </center>
  )
}

export default Navbar