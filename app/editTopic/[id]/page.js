'use client'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title + " " + description);
  
  }

  return (
    <>
      <div><Navbar /></div>
      <div className="mt-5">
        <center>
          <form onSubmit={handleSubmit} className='flex flex-col w-[75%] border-2 rounded gap-3 border-black p-3'>
            <input onChange={handleTitle} className='bg-slate-100 border-2 rounded-md p-3 text-xl' placeholder='Add Title' value={title} type="text" />
            <input onChange={handleDescription} className='bg-slate-100 border-2 rounded-md p-3 text-xl' placeholder='Description' value={description} type="text" />
            <button type='submit' className='w-[150px] text-white font-bold rounded-md h-[40px] bg-blue-500'>update</button>
          </form>
        </center>
      </div>
    </>
  )
}

export default Page;
