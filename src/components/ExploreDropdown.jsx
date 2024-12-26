import React, { useState } from "react";
import "../css/ExploreDropdown.css";

const ExploreDropdown = ({ onClose }) => {
    return (
        <div className="dropdown-overlay" onClick={onClose}>
            <div className="dropdown-form" onClick={(e) => e.stopPropagation()}>
                <h2>Explore Options</h2>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ExploreDropdown;
