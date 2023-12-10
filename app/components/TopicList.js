import React from 'react'
import axios from 'axios'

const TopicList = (props) => {
  const id = props.idd


  const handleDelete =(id)=> {
    axios.delete('./api/topics'+id)
    .then(result => {
      console.log(result)
      window.location.reload()
  })
  .catch(err => console.log(err))
  }


  return (

    <center>
       
       <div className=' flex flex-col gap-3 shadow-2xl p-2 w-[90%] m-2 border-2 rounded-md border-black'>
       <div  ><h2 className='w-[100%] text-2xl font-bold ' >{props.title}</h2></div>
       <div> <p className='w-[100%] text-xl'>{props.disc}</p></div>
       <div className='w-[100%] flex items-center justify-center gap-3'> 
        
       </div>
       </div>
    </center>
  )
}

export default TopicList