import React from "react"
import { Link } from "gatsby"

function LinkBox({ title, body, href, to }) {
  const Component = href ? "a" : Link
  return (
    <div>
      <Component {...(href ? { href } : { to })}>
        <h2>{title}</h2>
        <p>{body}</p>
      </Component>
    </div>
  )
}

export default LinkBox
