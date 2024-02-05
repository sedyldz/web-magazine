import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import WorksGrid from "../components/works-grid"
import Seo from "../components/seo"


const WorksPage = () => {
  const { allStrapiWork, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiWork {
        nodes {
          ...WorkCard
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
      <Seo seo={{ metaTitle: "WORKS" }} />
      <div className="container text-center mt-8">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">WORKS</h1>   
      </div>

      <main >
          
      <WorksGrid works={allStrapiWork.nodes} />      
        
      </main>
    </Layout>
  )
}

export default WorksPage
