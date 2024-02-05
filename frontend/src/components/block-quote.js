import React from "react"

const BlockQuote = ({ data }) => {
  return (
    <div className="container lg:py-4 max-w-6xl mx-auto">
      <blockquote className="  font-serif ">
        <p className="text-2xl  ">{data.quoteBody}</p>
      </blockquote>
    </div>
  )
}

export default BlockQuote
