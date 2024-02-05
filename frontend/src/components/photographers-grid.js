import React from "react"
import PhotographerCard from "./photographer-card"

const PhotographersGrid = ({ photographers }) => {
  return (
    <div className="px-2 md:px-10 mt-4 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {photographers.map((photographer) => (
        <PhotographerCard photographer={photographer} />
      ))}
    </div>
  )
}

export default PhotographersGrid
