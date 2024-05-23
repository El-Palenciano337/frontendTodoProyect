import React, { useState } from "react";
import "../styles/generalNav.css";

function GeneralNav({ selectedCategory, setSelectedCategory }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="NavBar">
            <div className="NavBar-container">
                <div className="NavBar-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`NavBar-menu ${isMenuOpen ? "open" : ""}`}>
                    <button
                        className={selectedCategory === "Tasks" ? "active" : ""}
                        onClick={() => {
                            setSelectedCategory("Tasks");
                            setIsMenuOpen(false);
                        }}
                    >
                        Tasks
                    </button>
                    <button
                        className={selectedCategory === "Goals" ? "active" : ""}
                        onClick={() => {
                            setSelectedCategory("Goals");
                            setIsMenuOpen(false);
                        }}
                    >
                        Goals
                    </button>
                </div>
            </div>
        </nav>
    );
}

export { GeneralNav };
