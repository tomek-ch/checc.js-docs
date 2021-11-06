import React, { useEffect, useState } from "react"
import { createContext, useContext } from "react"

const Context = createContext()

const cssVariables = {
  "--background": {
    dark: "rgba(0, 0, 0, 0.9)",
    light: "#fff",
  },
  "--foreground": {
    dark: "rgba(255, 255, 255, 0.07)",
    light: "#f7f7f8",
  },
  "--foreground-high-contrast": {
    dark: "rgba(255, 255, 255, 0.1)",
    light: "#dedede",
  },
  "--text": {
    dark: "#fff",
    light: "#000",
  },
  "--tile-color": {
    dark: "var(--foreground)",
    light: "var(--background)",
  },
  "--highlight-light": {
    dark: "rgba(0, 102, 255, 0.3)",
    light: "rgba(0, 102, 255, 0.2)",
  },
}

function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window ? JSON.parse(localStorage.getItem("isDarkTheme")) : false
  )

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
    localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme))
  }

  useEffect(() => {
    const theme = isDarkTheme ? "dark" : "light"
    for (let key in cssVariables) {
      document.documentElement.style.setProperty(key, cssVariables[key][theme])
    }
  }, [isDarkTheme])

  return (
    <Context.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </Context.Provider>
  )
}

function useThemeContext() {
  return useContext(Context)
}

export { useThemeContext, ThemeContextProvider }
