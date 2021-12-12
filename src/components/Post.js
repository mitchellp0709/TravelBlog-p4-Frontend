import { Link,useNavigate } from "react-router-dom"

const Post = (props) => {

  const navigate=useNavigate()
  const nav = () => {
    navigate(`/post/${props.post.id}`);
  }


  return (
    <div className="all-posts">
      <Link to={`/post/${props.post.id}`}>
        <h1>{props.post.name}</h1>
      </Link>
      
      <img src={props.post.image} alt="image of location" onClick={nav} className="nav"/>
      
      <p>{props.post.description}</p>
    </div>
  );
}

export default Post