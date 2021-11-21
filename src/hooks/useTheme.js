import cssVariables from "../data/colors"
import { useEffect, useState } from "react"

const isClient = typeof window !== "undefined"

function useTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    isClient ? JSON.parse(localStorage.getItem("isDarkTheme")) : false
  )

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
    localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme))
  }

  useEffect(() => {
    if (isClient) {
      const theme = isDarkTheme ? "dark" : "light"
      for (let key in cssVariables) {
        document.documentElement.style.setProperty(
          key,
          cssVariables[key][theme]
        )
      }
    }
  }, [isDarkTheme])

  return { isDarkTheme, toggleTheme }
}

export default useTheme
