import React from "react"
import "./src/styles/global.css"
import { ThemeContextProvider } from "./src/components/theme-context"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
