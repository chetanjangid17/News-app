import React, { useEffect, useState } from 'react'

function News() {
    const [news,setNews] =useState([])
    const loadNews =async() =>{
        const response = await fetch ("https://newsapi.org/v2/everything?q=apple&from=2024-03-05&to=2024-03-05&sortBy=popularity&apiKey=a89c8dcafa3e451da9294fff18aac841");

        const data = await response.json();
        setNews(data.articles);
    };
    useEffect(()=>{
        loadNews();
    },[]);
  return (
    <div>
    <div className="hover:bg-white text-3xl bg-gray-400 text-black py-4 text-center">News</div>
    <div className=" py-4 grid sm:gap-4  sm:grid-cols-3 bg-black object-fit ">
    {news.map((data) => {
            return (
                <div className='bg-gray-800 hover:scale-110 duration-500 rounded-sm  m-4 '  >
                <div >
            <img className="object-scale-down h-48 w-96  sm:grid mx-auto gap-6 " src={data.urlToImage} alt="No Image"/>
            </div>
            <div className='text-justify text-white sm:grid-cols-5 '>
                <h3 className=' text-center text-xl'> {data.title}</h3>
                <h2 className='text-center'>Author Name :-{data.author}</h2>
                <p className=''> details:-    {data.description}</p>
            <div className='flex justify-center items-center'>

              <button className='bg-gray-400 text-center flex flex-col items-center m-4 py-2 px-4 text-red-400'>
              <a href={data.url}> view more</a>
              </button>
            </div>
            </div>
            </div>
            );
        })}

    </div>

    </div>
  
  )
}

export default News