import React from "react"
import { ThemeContextProvider } from "./src/components/theme-context"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
