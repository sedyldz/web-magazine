import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ArticlesGrid from "../components/articles-grid"

const IssuePage = ({ data }) => {
  const issue = data.strapiIssue
  const articles = data.articles

  const seo = {
    metaTitle: issue.title,
    metaDescription: issue.description,
    shareImage: issue.cover,
  }

  return (
    <div>
      <Seo seo={seo} />
      <header className="text-center bg-white text-black ">
       <div className="relative h-screen">
         <div className=" w-full z-10">
         <Navbar className=" top-0"/>
         </div>
          <GatsbyImage           
            image={getImage(issue?.cover?.localFile)}
            alt={issue?.cover?.alternativeText}
            className="object-cover object-center h-full"
          />
          
          <div className="top-[60%] left-[50%] absolute z-10 -translate-y-1/2 -translate-x-1/2 w-2/3 lg:w-full max-w-md lg:max-w-xl">
            <h1 className="text-4xl lg:text-6xl mt-10 font-bold text-white">{issue.title}</h1>
            <h2 className="mt-5 text-xs md:text-md lg:text-lg font-semibold text-white">{issue.subtitle}</h2>
          </div>
        </div>

        <div className="flex max-w-full overflow-auto">
          {issue.preview&& (
            issue.preview.map((file) => (
              <GatsbyImage
                className="min-w-max"
                key={file.id}
                image={getImage(file.localFile)}
                alt={file.alternativeText}
              />
            ))
          )}       
        </div>
        <div className="py-8">
          <p className="lg:text-lg md:w-2/3 lg:w-1/2 font-bold px-3 mx-auto py-8 text-left">{issue.description}</p>
          <Link to="/all-issues" className="border-black px-10 py-2 font-bold border-2 text-center block max-w-max mx-auto hover:border-green hover:bg-green hover:text-white">
          BUY THIS ISSUE
         </Link>
        </div>
      </header>
      <main className="my-8 ">
      <ArticlesGrid articles={articles.nodes} />
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiIssue(slug: { eq: $slug }) {
      id
      slug
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
    }
    articles: allStrapiArticle(filter: {issue: {slug: {eq:  $slug }}}) {
      nodes {
        ...ArticleCard
      }
    }
  }
`

export default IssuePage
