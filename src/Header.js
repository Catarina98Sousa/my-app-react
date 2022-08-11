import useLocalStorage from "use-local-storage";
import "./index.css";
import { NavLink } from "react-router-dom";



export default function Header() {
  
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const [theme, setTheme] = useLocalStorage(
      "theme",
      defaultDark ? "dark" : "light"
    );
  
    function switchTheme() {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    }
  
    return (
        
      <div className="Header" data-theme={theme}>
        <header className="header" >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
          <button className="button button--small" onClick={switchTheme}>
             {theme === "light" ? " 🌙" : "🌞"} Theme
          </button>
        </header>
        </div>
        );
}
