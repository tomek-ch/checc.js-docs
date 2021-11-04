import React from "react"
import { Link } from "gatsby"
import ArrowRight from "./icons/arrow-right"

function LinkBox({ title, body, href, to, Icon }) {
  const Component = href ? "a" : Link
  return (
    <Component {...(href ? { href } : { to })}>
      <h2>
        <Icon />
        {title}
        <ArrowRight />
      </h2>
      <p>{body}</p>
    </Component>
  )
}

export default LinkBox
