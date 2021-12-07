import { Link } from "react-router-dom"

const Header = (props) => {
  return <nav className="header">
    <Link to="/">Home</Link>
    <Link to="/new">New</Link>
    <Link to="#">Profile</Link>
  </nav>
}

export default Header