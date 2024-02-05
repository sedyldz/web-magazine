import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import IssuesGrid from "../components/issues-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"


const MagazinePage = () => {
  const { allStrapiIssue, strapiGlobal, strapiMagazine } = useStaticQuery(graphql`
    query {
      allStrapiIssue(limit: 3) {
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
      <Seo seo={{ metaTitle: "Magazine" }} />
      <Headings
        title={strapiMagazine.title}
      />

      <main >
      <IssuesGrid issues={allStrapiIssue.nodes} />
        <p className="mt-5 lg:mt-10 text-3xl max-w-5xl p-3 mx-auto py-8 text-center font-serif">{strapiMagazine.intro}</p>
        <div className="max-w-3xl mx-auto p-3 py-8 cms-content">
        <div
          dangerouslySetInnerHTML={{
            __html: strapiMagazine.description.data.childMarkdownRemark.html,
          }}
        />
      </div>
        <Link to="/all-issues" className="border-black px-10 py-2 font-bold border-2 text-center block max-w-max mx-auto hover:border-green hover:bg-green hover:text-white">
          ALL ISSUES
        </Link>
        
      </main>
    </Layout>
  )
}

export default MagazinePage
