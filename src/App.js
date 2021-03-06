import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
import Form from "./pages/Form";
import SinglePost from "./pages/SinglePost";
import { useState, useEffect } from 'react'
import { useParams, Routes, Route, useNavigate, Link } from 'react-router-dom'
import './styles.scss'



function App() {
  
  ////////////////////////////////////
  // Hooks & State & misc Variables
  ////////////////////////////////////

  const navigate = useNavigate();
  //const url = "http://localhost:8000/";
  const url = "https://travel-blog-backend-2.herokuapp.com/";

  const [posts, setPosts] = useState([]);

  const nullPost = {
    name: "",
    description: "",
    image:""
  }
  const [targetPost, setTargetPost] = useState(nullPost);

  const [user, setUser] = useState()
  


  

  ////////////////////////////////////
  // Functions
  ////////////////////////////////////

  const getPosts = async () => {
    const response = await fetch(`${url}posts`)
    const data = await response.json()
    setPosts(data)
    //getRealPosts(data)
  }


  const addPost = async (newPost) => {
    await fetch(`${url}posts`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    getPosts()
  }

  const getTargetPost = (post) => {
    setTargetPost(post);
    navigate("/edit")
  }

  const updatePost = async (post) => {
    await fetch(`${url}posts/${post.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    getPosts()
  }

  const removePost = async(post) => {
    await fetch(`${url}posts/${post.id}`, {
      method: "delete",
    });
    getPosts()
    navigate("/")
  }


  useEffect(() => {getPosts() },[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              edit={getTargetPost}
              removePost={removePost}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialPost={targetPost}
              handleSubmit={updatePost}
              buttonLabel="Edit Post"
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialPost={nullPost}
              handleSubmit={addPost}
              buttonLabel="Create Post"
            />
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
