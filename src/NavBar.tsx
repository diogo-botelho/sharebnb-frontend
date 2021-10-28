import { NavLink } from "react-router-dom";
// import { useContext } from "react";
import "./NavBar.css";

/** Renders NavLinks
 *
 * Props: none
 * State: none
 *
 * App -> NavBar
 */

function NavBar() {
  return (
    <nav className="NavBar navbar navbar-light bg-light">
      <div>
        <NavLink className="NavBar-logo navbar-brand" exact to="/">
          ShareBnB
        </NavLink>
        <NavLink className="NavBar-link nav-link" exact to="/listings">
          Listings
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
