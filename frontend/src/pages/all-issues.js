import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import IssuesGrid from "../components/issues-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"


const AllIssuesPage = () => {
  const { allStrapiIssue, strapiGlobal, strapiMagazine } = useStaticQuery(graphql`
    query {
      allStrapiIssue {
        nodes {
          ...IssueCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
      strapiMagazine {
        title
        intro
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
    <Layout>
      <Seo seo={{ metaTitle: "ALL ISSUES" }} />
      <div className="container text-center mt-4">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">ALL ISSUES</h1>   
      </div>

      <main >
      <IssuesGrid issues={allStrapiIssue.nodes} />        
      </main>
    </Layout>
  )
}

export default AllIssuesPage
