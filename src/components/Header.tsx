import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  
  

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="header">
      <div className="logo">
        <h3><span>Portfólio</span> Victor</h3>
      </div>

      
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={location.pathname === "/projetos" ? "active" : ""}>
          <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
        </li>
        <li className={location.pathname === "/contato" ? "active" : ""}>
          <Link to="/contato" onClick={closeMenu}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
