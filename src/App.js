import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
import Form from "./pages/Form";
import SinglePost from "./pages/SinglePost";
import { useState, useEffect } from 'react'
import { useParams, Routes, Route, useNavigate, Link } from 'react-router-dom'

function App() {
  ////////////////////////////////////
  // Hooks & State & misc Variables
  ////////////////////////////////////

  const navigate = useNavigate();

  const url = "http://localhost:8000/locations";

  const [posts, setPosts] = useState([]);

  ////////////////////////////////////
  // Functions
  ////////////////////////////////////

  const getPosts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {getPosts() },[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route path="/post/:id" element={<SinglePost posts={posts} />} />
        <Route path="/edit" element={<Form />} />
        <Route path="/new" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
