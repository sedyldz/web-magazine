import React from "react"
import IssueCard from "./issue-card"

const IssuesGrid = ({ issues }) => {
  return (
    <div className="px-2 md:px-10 mt-4 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {issues.map((issue) => (
        <IssueCard issue={issue} />
      ))}
    </div>
  )
}

export default IssuesGrid
