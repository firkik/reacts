import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppAbout from "./AppAbout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppAbout />}/>
      </Routes>
    </Router>
  )
}