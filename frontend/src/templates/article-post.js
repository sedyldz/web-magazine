import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }

  return (
    
      <div
       style={{color: article.color, background: article.background}}
      >
        <div className="fixed w-full z-50">
          <Navbar className=" top-0"/>
         </div>

      <Seo seo={seo} />
      <header className="container max-w-6xl text-center py-2  ">
        <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover?.alternativeText}
          className="mt-20"
        />
        
          <h1 className="text-xl md:text-3xl lg:text-6xl mt-10 font-bold font-serif ">{article.title}</h1>
          {article.subtitle && (
          <h2 className="mt-0 text-xl md:text-2xl lg:text-4xl font-sans font-bold">{article.subtitle}</h2>
          )}
          {article.description && (
          <p className="mt-10 text-lg md:text-xl lg:text-3xl font-serif">{article.description}</p>
          )}
       
        
        
      </header>
      <main className="mt-8 ">
      {article.blocks && (
        <BlocksRenderer blocks={article.blocks || []} />
      )}
      </main>
      </div>
 
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      description
      background
      color
      blocks {
        ...Blocks
      }
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
  }
`

export default ArticlePage
