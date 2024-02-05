import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    <footer className="mt-16 bg-black py-8 text-white px-8 md:px-16 lg:px-32">
      <Link
      to={`/issue/${issue.slug}`}
      className="mx-auto block w-72"
    >
      <GatsbyImage
        image={getImage(issue.cover?.localFile)}
        alt={issue.cover?.alternativeText}
        className="w-72 mx-auto block"
      />
      <div className=" py-4 font-semibold text-lg text-center">
        <h3 className="  ">{issue.title}</h3>
        <p className="font-serif font-thin">
         {issue.number}
        </p>
        <p className="font-serif font-thin">OUT NOW</p>
      </div>
    </Link>
    <div className="flex w-full items-start py-20" >
      <div className="w-full md:w-1/4">
        <ul className="flex flex-col font-thin">
          <li className="hover:underline"><Link to="/magazine">MAGAZINE</Link></li>
          <li className="pl-2 hover:underline"><Link to={"/issue/"+issue.slug}>Current Issue</Link></li>
          <li className="pl-2 hover:underline"><Link to="/all-issues">All Issues</Link></li>
          <li className="pt-5 hover:underline"><Link to="/studio">STUDIO</Link></li>
          <li className="pl-2 hover:underline"><Link to={"/works/"}>Works</Link></li>
          <li className="pl-2 hover:underline"><Link to="/photographers">Photographers</Link></li>
          <li className="pt-5 hover:underline"><Link to="/">SHOP</Link></li>
          <li className="pl-2 hover:underline"><Link to={"/"}>Issue</Link></li>
          <li className="pl-2 hover:underline"><Link to="/">Collection</Link></li>
        </ul>
      </div>
      <div className="w-3/4 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 md:pr-10 pb-10">
          <StaticImage
                  src="../images/logo-white.png"
                  formats={["auto", "webp", "avif"]}
                  alt="search-icon"
                  className="w-1/3"
                />
          <p className="py-2">
          {strapiGlobal.footerDescription}
          </p>
          </div>
          <div className="md:w-1/3 md:pr-10 pb-10 ">
            <p> {strapiGlobal.address}</p>
            <p className="pt-4"> {strapiGlobal.phone}</p>
            <p> {strapiGlobal.email}</p>
          </div>
          <div className="md:w-1/3 ">
            <h3>JOIN THE MAILING LIST</h3>
            <p>Frequency: 4-6 emails per year. We respect your privacy and will never give away your information to any third party nor will we send you unsolicited emails.</p>
            <input className="w-full mt-2 py-1 bg-none border-b-2 border-white focus:outline-none bg-transparent  appearance-none" type="text" name="email" placeholder="E-mail"></input>
            <Link to="/" className="border-white block w-full py-2 font-bold border-2 text-center mt-6 mx-auto hover:border-green hover:bg-green hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
