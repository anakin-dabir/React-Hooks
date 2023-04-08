// use context send data from parent to it's all far childrens without using prop drilling
import React from "react";
import { useState, useContext } from "react";

export const PageTheme = React.createContext(null);


//export const currentDarkTheme = () => useContext(PageTheme);
//export const updateCurrentTheme = () => useContext(UpdatePageTheme);
export const Theme = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        return setDarkTheme(prev => !prev)
    };
    return (

        <PageTheme.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </PageTheme.Provider>
    )


}