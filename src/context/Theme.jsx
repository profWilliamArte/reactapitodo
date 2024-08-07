import  { createContext, useEffect, useState } from 'react'
export const ThemeCotext = createContext()

const Theme = ({children}) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === "light" ? 'dark' : 'light')
    }
    useEffect(() => {
     
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);
  return (
    <ThemeCotext.Provider value={{theme, toggleTheme}}>
    {children}
</ThemeCotext.Provider>
  )
}

export default Theme