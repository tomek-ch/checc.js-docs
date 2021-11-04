import React from "react"

function Tile({ title, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Tile
