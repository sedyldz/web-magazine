import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Seo from "../components/seo"


const StockistsPage = () => {
  const { physical, online, strapiGlobal } = useStaticQuery(graphql`
    query {
        physical: allStrapiStockist(filter: {type: {eq: "physical"}}) {
            continents: group(field: continent) {
              countries: group(field: country) {
                cities: group(field: city) {
                  edges {
                    node {
                      id
                      name
                      address
                      city
                      continent
                      country
                    }
                  }
                }
              }
            }
          }
          online: allStrapiStockist(filter: {type: {eq: "online"}}) {
            edges {
              node {
                id
                name
                address
                city
                continent
                country
              }
            }
          }
        strapiGlobal {
            siteName
            siteDescription
        }
    }
  `)
  const continents = physical.continents
  
  const onlineStores = online.edges
  console.log(onlineStores)
  

  return (
    <div className="bg-black">
      <Seo seo={{ metaTitle: "STOCKISTS" }} />

      <div className=" w-full z-10">
         <Navbar className=" top-0"/>
         </div>
     
      <div className="container text-center pt-20 text-white">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">STOCKISTS</h1>   
      </div>

      <main >
        <div className="max-w-3xl mx-auto flex">
<div className="w-1/2 px-3">
                
      {continents.map((continent) => (
          <div className="text-white">
              
            <p className="text-green text-xl font-semibold">
                {continent.countries[0].cities[0].edges[0].node.continent}
            </p>
             {continent.countries.map((country) => (
                <div className="font-bold">
               -     {country.cities[0].edges[0].node.country}
                    {country.cities.map((city) => (
                    <div>
                    {city.edges[0].node.city}
                    {city.edges.map((store) => (
                        <div className=" py-2">
                            <p className="underline font-bold">{store.node.name}</p>
                            <p className="font-thin">{store.node.address}</p>
                        </div>
                        ))}
                    </div>
                    ))}
                </div>
                ))}
          </div>
      ))}

    </div> 
    <div className="w-1/2">
    
        <div>
            <p className="text-green text-xl font-semibold">
            ONLINE
            </p>
            {onlineStores.map((onlineStore) => (
                <div className="text-white hover:underline text-lg">
                    <a href={onlineStore.node.link} target="_blank">{onlineStore.node.name}</a>
                </div>
            ))}
        </div>
        
    </div>
      </div> 
      </main>
      <Footer/>
    </div>
  )
}

export default StockistsPage
