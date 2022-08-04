import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isCastleExpanded, setIsCastleExpanded] = useState(false)


    return (
        <div class="menuStyle">
            <nav className="navigation">
                <button className="burger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li><Link to="/" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Accueil</Link></li>
                        <li><Link to="/Moi" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>A propos</Link></li>
                    </ul>
                </div>
            </nav>
            <div class="navbarPC">
                <div className="navbarPC-items">
                    <p>D.E_view</p>
                    <h2><Link to="/">Accueil</Link></h2>
                    <div className="castle" onMouseEnter={() => { setIsCastleExpanded(!isCastleExpanded) }} onMouseLeave={() => { setIsCastleExpanded(!isCastleExpanded) }}>
                        <h2><Link to="/Châteaux" className="castleLink">Châteaux</Link></h2>
                        <div className={isCastleExpanded ? "castle-list expanded" : "castle-list"}>
                            <h2><Link to="/Châteaux">Langeais</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;