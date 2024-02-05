import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WorkCard = ({ work }) => {

  return (
    <div
      className="aspect-square bg-white "
    >
   
      <GatsbyImage
        image={getImage(work.cover?.localFile)}
        alt={work.cover?.alternativeText}
        className="h-full"
      />
      <div className=" py-4 font-semibold text-xl">
        <h3 className="  ">{work.title}</h3>
        <p className="">
         {work.client}
        </p>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment WorkCard on STRAPI_WORK {
    id
    title
    client
    cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
  }
`

export default WorkCard
