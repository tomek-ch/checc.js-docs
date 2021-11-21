import React from "react"
import Tile from "../components/tile"
import tiles from "../data/tiles.js"
import { features } from "../styles/Features.module.css"

import Puzzle from "./icons/puzzle"
import File from "./icons/file"
import Suitcase from "./icons/suitcase"
import Share from "./icons/share"

const icons = {
  Puzzle,
  File,
  Suitcase,
  Share,
}

function Tiles() {
  return (
    <div className={features}>
      {tiles.map(tile => (
        <Tile key={tile.title} {...tile} Icon={icons[tile.icon]} />
      ))}
    </div>
  )
}

export default Tiles
