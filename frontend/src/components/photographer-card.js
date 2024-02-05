import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotographerCard = ({ photographer }) => {

  return (
    <div
      className="aspect-square bg-white "
    >
      <GatsbyImage
        image={getImage(photographer.cover?.localFile)}
        alt={photographer.cover?.alternativeText}
        className="h-full"
      />
      <div className=" py-4 font-semibold text-xl">
        <h3 className="  ">{photographer.title}</h3>
        <p className="">
         {photographer.number}
        </p>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment PhotographerCard on STRAPI_PHOTOGRAPHER {
    id
    slug
    title
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default PhotographerCard
