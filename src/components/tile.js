import React from "react"
import { tile } from "../styles/Features.module.css"

function Tile({ title, body }) {
  return (
    <div className={tile}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Tile
