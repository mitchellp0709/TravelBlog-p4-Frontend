import { Link, useNavigate } from "react-router-dom"

const Header = (props) => {
  const navigate = useNavigate()
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  const logout = async () => {
    await fetch("https://travel-blog-p4.herokuapp.com/auth/logout", {
      method:"post"
    })
    navigate("/login")
  }


  return <nav className="header">
    <Link to="/">Home</Link>
    <Link to="/new">New</Link>
    <Link to="#">Profile</Link>
    <h1 onClick={logout}>Logout</h1>
  </nav>
}

export default Header