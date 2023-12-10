
"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import TopicList from '@/app/components/TopicList';
import axios from 'axios';

const Page = () => {
  const [resultsdata, setResultsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('./api/topics');
      console.log(response);
      console.log(response.data);
      console.log(response.data.topics);
      setResultsData(response.data.topics);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  const handleRemove =()=> {

  }


  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Navbar />
      <main className=' flex  flex-wrap  items-center justify-center gap-4 flex-col'>
        {Array.isArray(resultsdata) &&
          resultsdata.map((res, index) => (
           <div classname='w-[100%] flex '>
             <TopicList key={index} title={res.title} disc={res.discription} idd={res._id} />
           </div>
          ))}
      </main>
    </>
  );
};

export default Page;
