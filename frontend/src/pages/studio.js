import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import PhotographersGrid from "../components/photographers-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"


const StudioPage = () => {
  const { allStrapiPhotographer, strapiGlobal, strapiStudio } = useStaticQuery(graphql`
    query {
      allStrapiPhotographer {
        nodes {
          ...PhotographerCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
      strapiStudio{
        cover {
            alternativeText
            localFile {
              url
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        description{          
            __typename
            data {
              id
              childMarkdownRemark {
                html
              }
            }
        }
      }
    }
  `)
  


  return (
    <div>
      <Seo seo={{ metaTitle: "Studio" }} />
     
        <div className="relative ">
         <div className="absolute w-full z-10">
         <Navbar className=" top-0"/>
         </div>
          <GatsbyImage           
            image={getImage(strapiStudio?.cover?.localFile)}
            alt={strapiStudio?.cover?.alternativeText}
            className="object-cover object-center w-full"
          />          
        </div>
      <main >
      
      <div className="mt-5 lg:mt-10 text-lg md:text-xl lg:text-3xl md:max-w-3xl lg:max-w-5xl px-3 mx-auto pt-8 text-center font-serif">
        <div
          dangerouslySetInnerHTML={{
            __html: strapiStudio.description.data.childMarkdownRemark.html,
          }}
        />
      </div>

        <Link to="/works" className="border-black px-10 py-2 my-16 font-bold border-2 text-center block max-w-max mx-auto hover:border-green hover:bg-green hover:text-white">
          WORKS
        </Link>

        <PhotographersGrid photographers={allStrapiPhotographer.nodes} />
      
        
      </main>
      <Footer />
    </div>
  )
}

export default StudioPage
