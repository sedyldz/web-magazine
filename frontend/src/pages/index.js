import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"


const HomePage = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        title
      subtitle  
      description    
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      preview {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { title, blocks } = strapiHome

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    <div>
      <Seo seo={seo} />
      <div className="relative h-[90vh]">
         <div className="fixed w-full z-50">
          <Navbar className=" top-0"/>
         </div>
         
         
          <GatsbyImage           
            image={getImage(strapiHome?.cover?.localFile)}
            alt={strapiHome?.cover?.alternativeText}
            className="object-cover object-center h-full "
          />


          
          <div className="text-center top-[70%] left-[50%] absolute z-10 -translate-y-1/2 -translate-x-1/2 w-2/3 lg:w-full max-w-md lg:max-w-xl">
            <h1 className="text-3xl lg:text-4xl mt-10 font-bold text-white">{strapiHome.title}</h1>
            <h2 className="text-md font-bold text-white max-w-xs mx-auto">{strapiHome.subtitle}</h2>
            <p className="mt-10 text-md font-bold text-white mx-auto">{strapiHome.description}</p>
          </div>
        </div>
        <div className="flex max-w-full overflow-auto">
          {strapiHome.preview&& (
            strapiHome.preview.map((file) => (
              <GatsbyImage
                className="min-w-max"
                key={file.id}
                image={getImage(file.localFile)}
                alt={file.alternativeText}
              />
            ))
          )}       
        </div>
      <div className=" ">
        <BlocksRenderer blocks={blocks} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
