import useLocalStorage from "use-local-storage";
import "./index.css";



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
          <button className="button button--small" onClick={switchTheme}>
             {theme === "light" ? " 🌙" : "🌞"} Theme
          </button>
        </header>
        </div>
        );
}
