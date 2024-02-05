import React from "react"

const Headings = ({ title, description }) => {
  return (
    <header className="container text-center mt-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      {description && (
        <p className="mt-4 text-2xl ">{description}</p>
      )}
    </header>
  )
}

export default Headings
