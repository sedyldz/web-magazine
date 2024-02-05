import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

const AboutPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { title, blocks } = strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    <div className="bg-black ">
      <div className="absolute w-full z-50">
          <Navbar className=" top-0"/>
         </div>
      <Seo seo={seo} />
      <div className="bg-black text-white px-2  py-24">
        <BlocksRenderer blocks={blocks} />
      </div>
      <Footer />

    </div>
  )
}

export default AboutPage
