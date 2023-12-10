'use client'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setdiscription] = useState("");
  
  

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setdiscription(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('./api/topics' , {title , discription})
    .then(result => {
       console.log(result)
       alert("Topic added")
       window.location.href = '/';
      })
       .catch(err => console.log(err))
  }
  

  return (
    <>
      <div><Navbar /></div>
      <div className="mt-5">
        <center>
          <form onSubmit={handleSubmit} className='flex flex-col w-[75%] border-2 rounded gap-3 border-black p-3'>
            <input onChange={handleTitle} className='bg-slate-100 border-2 rounded-md p-3 text-xl' placeholder='Add Title' value={title} type="text" />
            <input onChange={handleDescription} className='bg-slate-100 border-2 rounded-md p-3 text-xl' placeholder='Description' value={discription} type="text" />
            <button type='submit' className='w-[150px] text-white font-bold rounded-md h-[40px] bg-green-500'>Add</button>
          </form>
        </center>
      </div>
    </>
  )
}

export default page;
