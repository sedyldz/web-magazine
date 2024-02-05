import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const { allStrapiIssue,strapiGlobal } = useStaticQuery(graphql`
  query {
    allStrapiIssue(limit: 1, sort: {fields: id, order: DESC}) {
      nodes {
        ...IssueCard
      }
    }
    strapiGlobal {
      siteName
      siteDescription
      footerDescription
      address
      phone
      email
    }
  }
`)
const issue= allStrapiIssue.nodes[0]
  return (
    <header className="fixed w-full z-50 px-2 pt-2 lg:px-4 lg:pt-4 mb-0 text-black">
      <nav className="  flex flex-row items-stretch justify-between w-full">
        <div className="bg-green w-full flex items-center justify-start px-4">
        <button
            // onKeyDown={() => {
            //   toggleExpansion(!isExpanded)
            // }}
            onClick={() => {
              toggleExpansion(!isExpanded)
            }}
            className={`${isExpanded ? `open` : ``} relative z-20  `}
            id="nav-icon"
          >
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
          </button>
          </div>
          <div className="mask1  flex items-center">
            <Link to="/"> <div className="bg-green w-24 h-12 "></div> </Link>
          </div>
          <div className="bg-green w-full flex justify-end items-center px-4">
            <button className="">
              <StaticImage
                src="../images/search-icon.png"
                formats={["auto", "webp", "avif"]}
                alt="search-icon"
                width="35"
              />
            </button>
          </div>
          
      </nav>


  
        <div className={`${isExpanded ? `block ` : `hidden invisible`} bg-green   border-black border-t-2 pb-4`}>
            <div className="flex flex-col md:flex-row items-center md:content-between px-4  py-1">
              <div className="text-center md:text-left flex flex-col md:w-1/3">
                <Link className=" text-xl hover:text-white font-semibold" to ="/studio">STUDIO</Link>
                <Link className="font-thin hover:text-white text-lg" to="/works">Works</Link>
                <Link className="font-thin hover:text-white hover:text-white text-lg" to="/photographers">Photographers</Link>
              </div>
              <div className="text-center md:text-center flex flex-col md:w-1/3 mt-5 lg:mt-0">
                <Link className=" hover:text-white text-xl font-semibold" to ="/magazine">MAGAZINE</Link>
                <Link className="font-thin hover:text-white text-lg" to={"/issue/"+issue.slug}>Current Issue</Link>
                <Link className="font-thin hover:text-white text-lg" to="/all-issues">All Issues</Link>
              </div>
              <div className="text-center md:text-right flex flex-col md:w-1/3 mt-5 lg:mt-0">
                <Link className="hover:text-white text-xl font-semibold" to ="/">SHOP</Link>
                <Link className="font-thin hover:text-white text-lg" to="/">Issues</Link>
                <Link className="font-thin hover:text-white text-lg" to="/">Merch</Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:content-between md:mt-32 mb-8 md:mb-0 px-4 md:py-1">
              <div className="text-left flex flex-col md:w-1/3 font-semibold">
                <Link className="hover:text-white text-xl" to ="/contact">CONTACT</Link>
              </div>
              <div className="text-center flex flex-col md:w-1/3 font-semibold">
              {/*  <Link className="hover:text-white text-4xl" to ="/">EN/TR</Link>*/ }
              </div>
              <div className="text-right flex flex-col md:w-1/3 font-semibold">
                <Link className="hover:text-white text-xl" to ="/">STOCKISTS</Link>
              </div>
            </div>

            <div className="ticker-wrap">
                <Link className="ticker z-10" to={"/issue/"+issue.slug}>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>                       
                </Link>
                <Link className="ticker z-10" to={"/issue/"+issue.slug}>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>
                  <div className="ticker-item">
                    <p>
                    Latest Issue #{issue.number}
                    </p>
                  </div>                       
                </Link>
          </div>
         </div>
   
    </header>
  )
}

export default Navbar
