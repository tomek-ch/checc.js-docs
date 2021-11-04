import React from "react"
import { tile } from "../styles/Features.module.css"
import { iconBox } from "../styles/IconBox.module.css"

function Tile({ title, body, Icon }) {
  return (
    <div className={tile}>
      <div className={iconBox}>
        <Icon />
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Tile
