import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IssueCard = ({ issue }) => {

  return (
    <Link
      to={`/issue/${issue.slug}`}
      className="aspect-square bg-white "
    >
      <GatsbyImage
        image={getImage(issue.cover?.localFile)}
        alt={issue.cover?.alternativeText}
        className="h-full"
      />
      <div className=" py-4 font-semibold text-xl">
        <h3 className="  ">{issue.title}</h3>
        <p className="">
         {issue.number}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment IssueCard on STRAPI_ISSUE {
    id
    slug
    title
    description
    number
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default IssueCard
