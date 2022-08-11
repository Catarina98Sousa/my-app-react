import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header";


export default function App() {

    return (
<div className="app">
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
        </Routes>
    </Router>
</div>
    )
}
 