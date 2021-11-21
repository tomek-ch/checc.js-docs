import React from "react"
import Sun from "./icons/sun"
import Moon from "./icons/moon"
import { themeBtn } from "../styles/Header.module.css"
import useTheme from "../hooks/useTheme"

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={themeBtn}
    >
      {isDarkTheme ? <Moon size="16" /> : <Sun size="16" />}
    </button>
  )
}

export default ThemeToggle
