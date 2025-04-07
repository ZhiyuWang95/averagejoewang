import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Interests, Notes, Portfolio } from "./components/PortfolioPages"; // Adjust path as needed

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/resume" element={<Portfolio />} />
            </Routes>
        </Router>
    );
};

export default App;
