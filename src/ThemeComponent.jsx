import { useContext } from "react";
import { PageTheme } from "./Theme";

//import { currentDarkTheme, updateCurrentTheme } from "./Theme";
const ThemeComponent = () => {
    //const darkTheme = currentDarkTheme();
    //const toggleTheme = updateCurrentTheme();
    const { darkTheme, setDarkTheme } = useContext(PageTheme);
    const themeCss = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
        width: '100px',
        height: '100px',
        transition: '.4s'
    }

    return (
        <div style={themeCss}>
            <label htmlFor="themeChanger">Dark Mode</label>
            <input type="checkbox" onChange={() => setDarkTheme(prev => !prev)} name="" id="themeChanger" />
        </div>
    )



}

export default ThemeComponent;