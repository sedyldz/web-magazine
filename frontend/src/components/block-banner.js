import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Video from "../components/video"

const BlockBanner = ({ data }) => {

  const type = data.type

if(type==='center' || type==='green'){
  return (  
    <div className={"relative h-[60vh] lg:h-auto " + (type==="green" ? " border-green border-y-8 " :"" )}
    style={{color: data.color}}
    >        
        <GatsbyImage           
            image={getImage(data.file.localFile)}
            alt={data.file.alternativeText}
            className="h-full w-full"            
        />          
        <div className="top-[50%] left-[50%] absolute text-center z-10 -translate-y-1/2 -translate-x-1/2 lg:w-2/3 lg:w-full max-w-md lg:max-w-xl">
          <h1 className="text-2xl lg:text-5xl mt-10 mx-auto max-w-lg font-bold text-">{data.title}</h1>
          {data.subtitle && (
          <h2 className="text-2xl lg:text-5xl font-bold  ">{data.subtitle}</h2>
          )}
        </div>
    </div>
  )
}else if(type==='right'){
  return (  
    <div className="relative h-screen lg:min-h-max bg-black pb-50 lg:h-auto"
    style={{color: data.color}}
    >        
        <GatsbyImage           
            image={getImage(data.file.localFile)}
            alt={data.file.alternativeText}
            className="h-[60vh] lg:h-full lg:w-full "
            imgStyle={{ objectPosition: ' bottom'}}
    
            
        />          
        <div className={"bottom-10 left-2 lg:bottom-20 lg:right-20 lg:left-auto absolute lg:text-center z-10 lg:w-3/5 lg:w-2xl "}>
          <div className={"flex lg:items-end  flex-col lg:mb-10 lg:h-48 "}>
          <h1 className={"block font-bold lg:text-right text-3xl md:text-4xl lg:text-5xl py-2 "}>{data.title}</h1>
          {data.subtitle && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif lg:text-right">{data.subtitle}</h2>
          )}
          </div>
          <div className="text-left mt-10 lg:mt-[20vh] font-bold text-tiny lg:ml-64">
            {data.authors.length>0 && (
                  data.authors.map((author) => (
                                    
                    <p>{
                      (author.type==='photography' ? "PHOTOGRAPHY BY " : "INTERVIEW BY " )  
                      + author.name
                      }</p>
                  ))
            )}
          </div>
          
          {data.description && (
          <p className="text-lg mt-12 font-serif text-left lg:max-w-md lg:ml-64">
            {data.description}
            <Link to={"article/"+data.article?.slug} className="font-thin font-sans hover:text-green text-sm hover:underline"> _read more</Link>
          </p>
          )}
        </div>
    </div>
  )
}else if(type==='left'){
  return (  
    <div className="relative h-screen lg:min-h-max">        
        <GatsbyImage           
            image={getImage(data.file.localFile)}
            alt={data.file.alternativeText}
            className="h-full lg:w-full"
            imgStyle={{ objectPosition: 'left bottom'}}
            
        />          
        <div className={"bottom-10 left-2 lg:bottom-20 lg:left-20 absolute text-center z-10  lg:w-4/5 "}
        style={{color: data.color}}
        >
          <div className="flex  flex-col">
            {data.subtitle && (
            <h2 className="text-md font-bold lg:w-1/2 lg:max-w-lg text-left lg:mb-10 lg:ml-96">{data.subtitle}</h2>
            )}
              
            <div className="text-left font-bold mt-5 text-4xl lg:text-6xl w-full">
            <h1 className="block font-bold font-serif  ">{data.title}</h1>   
              {data.authors.length>0 && (
                    data.authors.map((author) => (                                    
                      <p>{
                        "BY " +
                        author.name
                        }</p>
                    ))
              )}
          </div>
          
          {data.description && (
        
            <p className="text-md mt-10 font-bold text-left lg:max-w-lg lg:ml-96">
              {data.description}
              <Link to={"article/"+data.article?.slug} className="font-thin hover:text-green text-sm hover:underline"> _read more</Link>
            </p>
     
          )}
             </div>
        </div>
    </div>
  )
}else if(type==='video'){
  return (  
  <div className={"relative md:py-8 md:px-9 text-white"} 
  style={{color: data.color, background: data.background}}
  >
      <div className="lg:w-[80vw] md:h-[45vw] h-screen   mx-auto">
       <Video       
        videoSrcURL={data.source}
        videoTitle={data.title}        
      />
      </div>
      <div className="top-[50%] left-[50%]  -translate-x-1/2 px-3 absolute lg:relative text-center z-10  w-full ">
          <h1 className="text-2xl lg:text-4xl mt-10 mx-auto max-w-lg font-bold text-">{data.title}</h1>
          {data.subtitle && (
          <h2 className="text-2xl lg:text-4xl font-bold  ">{data.subtitle}</h2>
          )}
           {data.description && (        
            <p className="text-lg mt-10 font-serif lg:w-1/2 mx-auto">
              {data.description}
              <Link to={"article/"+data.article?.slug} className="font-thin hover:text-green text-sm hover:underline"> _read more</Link>
            </p>    
          )}
      </div>
  </div>
  ) 
      
}
  
}

export default BlockBanner
