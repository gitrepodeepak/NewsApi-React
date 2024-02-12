import React from 'react';

export default function News(props){
    return(
        <>
        {props.news.articles.map((a, i)=>{return <div className='flex flex-col bg-gray-950 p-4 m-3 rounded-xl' key={a.url}>
                <div className='pb-3'>
                    <p>Source: {a.source.name}</p>
                </div>
                <img className='rounded-lg m-1' src={a.urlToImage?a.urlToImage:"https://www.certificate.digital/images/theme/resize/cropping.webp"} alt="Article Img" />
                <div className='p-3'>
                    <h1 className='md:text-2xl text-lg mb-2'>{a.title}</h1>
                    <p className='text-sm'>{a.description}</p>
                </div>
                <div className='text-sm p-3'>
                    <p>Author: {a.author?a.author:"Unknown"}<br/>
                    Published At: {new Date(a.publishedAt).toUTCString()}</p>
                </div>
                <a href={a.url} target="_blank"><button className='bg-cyan-950 p-3 m-2 mt-3 rounded-lg hover:bg-slate-700 transition-all duration-300' >Read More</button></a>
            </div>
            })}
        </>
    )
}