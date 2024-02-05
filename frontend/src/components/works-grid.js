import React from "react"
import WorkCard from "./work-card"

const WorksGrid = ({ works }) => {
  return (
    <div className="px-2 md:px-10 mt-4 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <WorkCard work={work} />
      ))}
    </div>
  )
}

export default WorksGrid
