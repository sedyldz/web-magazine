import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PhotographersGrid from "../components/photographers-grid"
import Seo from "../components/seo"


const PhotographersPage = () => {
  const { allStrapiPhotographer, strapiGlobal } = useStaticQuery(graphql`
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
    }
  `)
  

  return (
    <Layout>
      <Seo seo={{ metaTitle: "PHOTOGRAPHERS" }} />
      <div className="container text-center mt-8">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">PHOTOGRAPHERS</h1>   
      </div>

      <main >
          
      <PhotographersGrid photographers={allStrapiPhotographer.nodes} />
      
      </main>
    </Layout>
  )
}

export default PhotographersPage
