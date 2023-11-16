import './Nav.scss'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div >

      <div className="topnav">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        
        {/* <a href="/" exact>Home</a>
        <a href="/news">News</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a> */}
      </div>

    </div>
  )
}

export default Nav; 
