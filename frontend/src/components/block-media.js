import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Video from "../components/video"

const BlockMedia = ({ data }) => {
  
  const type = data.type


if(type==="image-double"){
  return (
    <div className={`py-6 md:py-12 ${type} `}>
        <GatsbyImage
          image={getImage(data.file.localFile)}
          alt={data.file.alternativeText}    
        />
    </div>
  )
}else{
  return (
    <div className={`py-6 md:py-12 ${type} `}>
      {type==="video" ? (
<div className="lg:w-[80vw] md:h-[45vw] h-screen  md:my-8 md:px-9 mx-auto">
       <Video       
        videoSrcURL="https://www.youtube.com/embed/i8JILrd_Usg"
        videoTitle="test"
        
      />
      </div>
      ) : (
        <GatsbyImage
          image={getImage(data.file.localFile)}
          alt={data.file.alternativeText}
    
        />
      )}
    </div>
  )
}
}

export default BlockMedia
