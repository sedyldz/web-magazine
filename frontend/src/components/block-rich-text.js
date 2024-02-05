import React from "react"

const BlockRichText = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto p-3 py-8 cms-content">
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default BlockRichText
