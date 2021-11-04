import React from "react"
import { tile } from "../styles/Features.module.css"

function Tile({ title, body, Icon }) {
  return (
    <div className={tile}>
      {<Icon />}
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Tile
